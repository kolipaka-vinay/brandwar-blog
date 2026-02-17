import prisma from "../config/prismaClient.js";

/////////////////////////////////////////////////////////
// CREATE BLOG
/////////////////////////////////////////////////////////

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

    const { slug, title, keywords, description } = req.body;

    const blog = await prisma.blog.create({
      data: {
        userId: user.id,
        slug,
        title,
        keywords,
        description,
      },
    });

    res.status(201).json({ blog });

  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


/////////////////////////////////////////////////////////
// GET ALL BLOGS (PUBLIC)
/////////////////////////////////////////////////////////

export const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });

    res.json(blogs);

  } catch (err) {
    console.error("GET BLOGS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

/////////////////////////////////////////////////////////
// DELETE BLOG
/////////////////////////////////////////////////////////

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔹 Fetch fresh user from DB
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

    // SUPERADMIN can delete anything
    if (user.role !== "SUPERADMIN") {
      if (blog.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this blog",
        });
      }
    }

    await prisma.blog.delete({
      where: { id },
    });

    res.json({ message: "Blog deleted successfully" });

  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


/////////////////////////////////////////////////////////
// UPDATE BLOG
/////////////////////////////////////////////////////////

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, title, keywords, description } = req.body;

    // 🔹 Fetch fresh user from DB
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

    // SUPERADMIN can update anything
    if (user.role !== "SUPERADMIN") {
      if (blog.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to update this blog",
        });
      }
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        slug,
        title,
        keywords,
        description,
      },
    });

    res.json({ blog: updatedBlog });

  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
