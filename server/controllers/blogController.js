import prisma from "../config/prismaClient.js";


// CREATE BLOG 
export const createBlog = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    if (!user.allowBlogs) {
      return res.status(403).json({
        message: "You are not allowed to create new blogs",
      });
    }

    const { slug, title, keywords, description, contents } = req.body;

    if (!contents || contents.length === 0) {
      return res.status(400).json({ message: "Content is required" });
    }

    //Validate only 1 image
    const imageBlocks = contents.filter(c => c.type === "image");
    if (imageBlocks.length > 1) {
      return res.status(400).json({
        message: "Only one image section is allowed",
      });
    }

    const blog = await prisma.blog.create({
      data: {
        userId: user.id,
        slug,
        title,
        keywords,
        description,
        contents: {
          create: contents.map((block, index) => ({
            type: block.type,
            content: block.content,
            order: block.order ?? index + 1,
          })),
        },
      },
      include: {
        contents: {
          orderBy: { order: "asc" },
        },
      },
    });

    res.status(201).json({ blog });

  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        keywords: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        // contents: {
        //   where: { type: "image" }, // only thumbnail
        //   take: 1,
        //   select: {
        //     content: true,
        //   },
        // },
        contents: {
          orderBy: { order: "asc" },
        },
      },
    });

    res.json(blogs);

  } catch (err) {
    console.error("GET BLOGS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};







// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔹 Fetch fresh user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    //Permission Check
    if (user.role !== "SUPERADMIN") {
      if (blog.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this blog",
        });
      }
    }

    //Delete Blog (content blocks auto delete)
    await prisma.blog.delete({
      where: { id },
    });

    res.json({ message: "Blog deleted successfully" });

  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};




// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, title, keywords, description, contents } = req.body;

    // 🔹 Fetch fresh user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { contents: true },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Permission Rules
    if (user.role !== "SUPERADMIN") {

      //Cannot update if allowBlogs = false
      if (!user.allowBlogs) {
        return res.status(403).json({
          message: "You are not allowed to update blogs",
        });
      }

      // Must be owner
      if (blog.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to update this blog",
        });
      }
    }

    // Validate only 1 image
    if (contents) {
      const imageBlocks = contents.filter(c => c.type === "image");
      if (imageBlocks.length > 1) {
        return res.status(400).json({
          message: "Only one image section allowed",
        });
      }
    }

    await prisma.$transaction(async (tx) => {

      // Update blog fields
      await tx.blog.update({
        where: { id },
        data: {
          slug,
          title,
          keywords,
          description,
        },
      });

      if (!contents) return;

      const incomingIds = contents
        .filter(c => c.id)
        .map(c => c.id);

      //Delete removed blocks
      await tx.blogContentBlock.deleteMany({
        where: {
          blogId: id,
          id: { notIn: incomingIds.length ? incomingIds : [""] },
        },
      });

      // Update or Create blocks
      for (const block of contents) {
        if (block.id) {
          await tx.blogContentBlock.update({
            where: { id: block.id },
            data: {
              type: block.type,
              content: block.content,
              order: block.order,
            },
          });
        } else {
          await tx.blogContentBlock.create({
            data: {
              blogId: id,
              type: block.type,
              content: block.content,
              order: block.order,
            },
          });
        }
      }
    });

    const updatedBlog = await prisma.blog.findUnique({
      where: { id },
      include: {
        contents: {
          orderBy: { order: "asc" },
        },
      },
    });

    res.json({ blog: updatedBlog });

  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};