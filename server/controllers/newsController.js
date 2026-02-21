import prisma from "../config/prismaClient.js";

// CREATE NEWS
export const createNews = async (req, res) => {
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
        message: "You are not allowed to create news",
      });
    }

    const { slug, title, keywords, description, contents } = req.body;

    // if (!contents || contents.length === 0) {
    //   return res.status(400).json({ message: "Content is required" });
    // }

    // Parse contents (because form-data)
    let parsedContents = JSON.parse(contents);

    // If image uploaded
    let imageUrl = null;

    if (req.files && req.files.length > 0) {
      const imageFile = req.files[0]; // assuming only 1 image
      imageUrl = `${req.protocol}://${req.get("host")}/${imageFile.path.replace(/\\/g, "/")}`;
    }

    // Replace image block content automatically
    parsedContents = parsedContents.map((block) => {
      if (block.type === "image" && imageUrl) {
        return { ...block, content: imageUrl };
      }
      return block;
    });

    // Validate only 1 image
    const imageBlocks = parsedContents.filter(c => c.type === "image");
    if (imageBlocks.length > 1) {
      return res.status(400).json({
        message: "Only one image section is allowed",
      });
    }

    const news = await prisma.news.create({
      data: {
        userId: user.id,
        slug,
        title,
        keywords,
        description,
        contents: {
          create: parsedContents.map((block, index) => ({
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

    res.status(201).json({ news });

  } catch (err) {
    console.error("CREATE NEWS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

//GET NEWS
export const getNews = async (req, res) => {
  try {
    const news = await prisma.news.findMany({
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
        contents: {
          orderBy: { order: "asc" },
        },
      },
    });

    res.json(news);

  } catch (err) {
    console.error("GET NEWS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

//DELETE NEWS
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    const news = await prisma.news.findUnique({
      where: { id },
    });

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // Permission
    if (user.role !== "SUPERADMIN") {
      if (news.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this news",
        });
      }
    }

    await prisma.news.delete({
      where: { id },
    });

    res.json({ message: "News deleted successfully" });

  } catch (err) {
    console.error("DELETE NEWS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

//UPDATE NEWS
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, title, keywords, description, contents } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    const news = await prisma.news.findUnique({
      where: { id },
      include: { contents: true },
    });

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    if (user.role !== "SUPERADMIN") {

      if (!user.allowBlogs) {
        return res.status(403).json({
          message: "You are not allowed to update news",
        });
      }

      if (news.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to update this news",
        });
      }
    }

    // Parse contents (form-data)
    let parsedContents = contents ? JSON.parse(contents) : null;

    // Handle new image upload
    let newImageUrl = null;
    if (req.files && req.files.length > 0) {
      const imageFile = req.files[0];
      newImageUrl = `${req.protocol}://${req.get("host")}/${imageFile.path.replace(/\\/g, "/")}`;

      // Delete old image if exists
      const oldImageBlock = blog.contents.find(b => b.type === "image");
      if (oldImageBlock) {
        const oldPath = oldImageBlock.content.replace(
          `${req.protocol}://${req.get("host")}/`,
          ""
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    if (parsedContents) {
      // Replace image block content if new image uploaded
      parsedContents = parsedContents.map(block => {
        if (block.type === "image" && newImageUrl) {
          return { ...block, content: newImageUrl };
        }
        return block;
      });

    // Validate only 1 image
    if (contents) {
      const imageBlocks = parsedContents.filter(c => c.type === "image");
      if (imageBlocks.length > 1) {
        return res.status(400).json({
          message: "Only one image section allowed",
        });
      }
    }

    await prisma.$transaction(async (tx) => {

      await tx.news.update({
        where: { id },
        data: {
          slug,
          title,
          keywords,
          description,
        },
      });

      if (!parsedContents) return;

      const incomingIds = parsedContents
        .filter(c => c.id)
        .map(c => c.id);

      await tx.newsContentBlock.deleteMany({
        where: {
          newsId: id,
          id: { notIn: incomingIds.length ? incomingIds : [""] },
        },
      });

      for (const block of parsedContents) {
        if (block.id) {
          await tx.newsContentBlock.update({
            where: { id: block.id },
            data: {
              type: block.type,
              content: block.content,
              order: block.order,
            },
          });
        } else {
          await tx.newsContentBlock.create({
            data: {
              newsId: id,
              type: block.type,
              content: block.content,
              order: block.order,
            },
          });
        }
      }
    });

    const updatedNews = await prisma.news.findUnique({
      where: { id },
      include: {
        contents: {
          orderBy: { order: "asc" },
        },
      },
    });

    res.json({ news: updatedNews });
  } 
  } catch (err) {
    console.error("UPDATE NEWS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
