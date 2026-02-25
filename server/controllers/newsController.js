import prisma from "../config/prismaClient.js";
import fs from "fs"

//Create News
export const createNews = async (req, res) => {
  try {
    const currentUser = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!currentUser) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!currentUser.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    if (!currentUser.allowNews) {
      return res.status(403).json({
        message: "You are not allowed to create news",
      });
    }

    const { slug, title, keywords, description, contents, ownerId } = req.body;

    // 🔹 OWNER LOGIC (same as blog)
    let newsOwnerId = currentUser.id; // default owner

    // SUPERADMIN can create for ADMIN
    if (currentUser.role === "SUPERADMIN" && ownerId) {
      const adminUser = await prisma.user.findUnique({
        where: { id: ownerId },
      });

      if (!adminUser || adminUser.role !== "ADMIN") {
        return res.status(400).json({
          message: "Invalid admin ID. Must be an ADMIN user.",
        });
      }

      newsOwnerId = ownerId;
    }

    // ADMIN cannot assign owner manually
    if (currentUser.role === "ADMIN" && ownerId) {
      return res.status(403).json({
        message: "Admins cannot assign news owner",
      });
    }

    // 🔹 CONTENT PARSE
    let parsedContents = JSON.parse(contents);

    let imageUrl = null;

    if (req.files && req.files.length > 0) {
      const imageFile = req.files[0];

      const filePath = imageFile.path
        .split("uploads")[1]
        .replace(/\\/g, "/");

      imageUrl = `${req.protocol}://${req.get("host")}/uploads${filePath}`;

    }

    parsedContents = parsedContents.map((block) => {
      if (block.type === "image" && imageUrl) {
        return { ...block, content: imageUrl };
      }
      return block;
    });

    // 🔹 Validate only 1 image block
    const imageBlocks = parsedContents.filter(
      (c) => c.type === "image"
    );

    if (imageBlocks.length > 1) {
      return res.status(400).json({
        message: "Only one image section is allowed",
      });
    }

    // 🔹 CREATE NEWS
    const news = await prisma.news.create({
      data: {
        userId: newsOwnerId,
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
// CREATE NEWS
// export const createNews = async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     if (!user.isActive) {
//       return res.status(403).json({ message: "Account is blocked" });
//     }

//     if (!user.allowNews) {
//       return res.status(403).json({
//         message: "You are not allowed to create news",
//       });
//     }

//     const { slug, title, keywords, description, contents,ownerId } = req.body;

//     // if (!contents || contents.length === 0) {
//     //   return res.status(400).json({ message: "Content is required" });
//     // }

//     // Parse contents (because form-data)
//     let parsedContents = JSON.parse(contents);

//     // If image uploaded
//     let imageUrl = null;

//     if (req.files && req.files.length > 0) {
//       const imageFile = req.files[0]; // assuming only 1 image
//       imageUrl = `${req.protocol}://${req.get("host")}/${imageFile.path.replace(/\\/g, "/")}`;
//     }

//     // Replace image block content automatically
//     parsedContents = parsedContents.map((block) => {
//       if (block.type === "image" && imageUrl) {
//         return { ...block, content: imageUrl };
//       }
//       return block;
//     });

//     // Validate only 1 image
//     const imageBlocks = parsedContents.filter(c => c.type === "image");
//     if (imageBlocks.length > 1) {
//       return res.status(400).json({
//         message: "Only one image section is allowed",
//       });
//     }

//     const news = await prisma.news.create({
//       data: {
//         userId: user.id,
//         slug,
//         title,
//         keywords,
//         description,
//         contents: {
//           create: parsedContents.map((block, index) => ({
//             type: block.type,
//             content: block.content,
//             order: block.order ?? index + 1,
//           })),
//         },
//       },
//       include: {
//         contents: {
//           orderBy: { order: "asc" },
//         },
//       },
//     });

//     res.status(201).json({ news });

//   } catch (err) {
//     console.error("CREATE NEWS ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };
//to get news
const newsSelectConfig = () => ({
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
});
//GET NEWS
export const getNews = async (req, res) => {
  try {
    // 1️⃣ Get fresh user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    // 2️⃣ Validations
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is inactive" });
    }

    let news;

    // 3️⃣ Role-based filtering
    if (user.role === "SUPERADMIN") {
      // SuperAdmin sees all news
      news = await prisma.news.findMany({
        orderBy: { createdAt: "desc" },
        select: newsSelectConfig(),
      });
    } 
    else if (user.role === "ADMIN") {
      // Admin sees only his news
      news = await prisma.news.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        select: newsSelectConfig(),
      });
    } 
    else {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(news);

  } catch (err) {
    console.error("GET NEWS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};


// export const getNews = async (req, res) => {
//   try {
//     const news = await prisma.news.findMany({
//       orderBy: { createdAt: "desc" },
//       select: {
//         id: true,
//         slug: true,
//         title: true,
//         description: true,
//         keywords: true,
//         createdAt: true,
//         user: {
//           select: {
//             id: true,
//             name: true,
//           },
//         },
//         contents: {
//           orderBy: { order: "asc" },
//         },
//       },
//     });

//     res.json(news);

//   } catch (err) {
//     console.error("GET NEWS ERROR:", err);
//     res.status(500).json({ error: "Failed to fetch news" });
//   }
// };

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

      if (!user.allowNews) {
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
      const oldImageBlock = news.contents.find(b => b.type === "image");
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


      for (let index = 0; index < parsedContents.length; index++) {
        const block = parsedContents[index];

        // 🔹 Find existing DB block (if updating)
        const existingBlock = news.contents.find(b => b.id === block.id);

        let finalOrder;

        if (typeof block.order === "number") {
          // 1️⃣ Frontend provided new order
          finalOrder = block.order;
        } else if (existingBlock) {
          // 2️⃣ No new order → keep DB order
          finalOrder = existingBlock.order;
        } else {
          // 3️⃣ New block without order → fallback like create
          finalOrder = index + 1;
        }

        if (block.id) {
          await tx.newsContentBlock.update({
            where: { id: block.id },
            data: {
              type: block.type,
              content: block.content,
              order: finalOrder,
            },
          });
        } else {
          await tx.newsContentBlock.create({
            data: {
              newsId: id,
              type: block.type,
              content: block.content,
              order: finalOrder,
            },
          });
        }
      }


      // for (const block of parsedContents) {
      //   if (block.id) {
      //     await tx.newsContentBlock.update({
      //       where: { id: block.id },
      //       data: {
      //         type: block.type,
      //         content: block.content,
      //         order: block.order,
      //       },
      //     });
      //   } else {
      //     await tx.newsContentBlock.create({
      //       data: {
      //         newsId: id,
      //         type: block.type,
      //         content: block.content,
      //         order: block.order,
      //       },
      //     });
      //   }
      // }
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
