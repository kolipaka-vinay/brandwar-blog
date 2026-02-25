import prisma from "../config/prismaClient.js";
import fs from "fs"

// CREATE BLOG 
export const createBlog = async (req, res) => {
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

    if (!currentUser.allowBlogs) {
      return res.status(403).json({
        message: "You are not allowed to create new blogs",
      });
    }

    const { slug, title, keywords, description, contents, ownerId } = req.body;

    // OWNER LOGIC
    let blogOwnerId = currentUser.id; // default owner

    // If SUPER_ADMIN wants to create for admin
    if (currentUser.role === "SUPERADMIN" && ownerId) {

      const adminUser = await prisma.user.findUnique({
        where: { id: ownerId },
      });

      if (!adminUser || adminUser.role !== "ADMIN") {
        return res.status(400).json({
          message: "Invalid admin ID. Must be an ADMIN user.",
        });
      }

      blogOwnerId = ownerId;
    }

    // ADMIN cannot assign ownerId manually
    if (currentUser.role === "ADMIN" && ownerId) {
      return res.status(403).json({
        message: "Admins cannot assign blog owner",
      });
    }

    // CONTENT PARSE

    let parsedContents = JSON.parse(contents);

    let imageUrl = null;

    if (req.files && req.files.length > 0) {
      const imageFile = req.files[0];
      // imageUrl = `${req.protocol}://${req.get("host")}/${imageFile.path.replace(/\\/g, "/")}`;
      const filePath = imageFile.path.split('uploads')[1].replace(/\\/g, '/');
      imageUrl = `${req.protocol}://${req.get("host")}/uploads${filePath}`;
    }

    parsedContents = parsedContents.map((block) => {
      if (block.type === "image" && imageUrl) {
        return { ...block, content: imageUrl };
      }
      return block;
    });

    // Validate only 1 image block
    const imageBlocks = parsedContents.filter(c => c.type === "image");
    if (imageBlocks.length > 1) {
      return res.status(400).json({
        message: "Only one image section is allowed",
      });
    }

    // CREATE BLOG
    const blog = await prisma.blog.create({
      data: {
        userId: blogOwnerId,
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

    res.status(201).json({ blog });

  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const createBlog = async (req, res) => {
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

//     if (!user.allowBlogs) {
//       return res.status(403).json({
//         message: "You are not allowed to create new blogs",
//       });
//     }

//     const { slug, title, keywords, description, contents } = req.body;
    
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

//     // if (!contents || contents.length === 0) {
//     //   return res.status(400).json({ message: "Content is required" });
//     // }

//     //Validate only 1 image
//     const imageBlocks = parsedContents.filter(c => c.type === "image");
//     if (imageBlocks.length > 1) {
//       return res.status(400).json({
//         message: "Only one image section is allowed",
//       });
//     }

//     const blog = await prisma.blog.create({
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

//     res.status(201).json({ blog });

//   } catch (err) {
//     console.error("CREATE BLOG ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

// to get blogs
const blogSelectConfig = () => ({
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

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    // 1️⃣ Get fresh user from DB
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    // 2️⃣ Basic validations
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is inactive" });
    }

    let blogs;

    // 3️⃣ Role-based filtering
    if (user.role === "SUPERADMIN") {
      // SuperAdmin sees all blogs
      blogs = await prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        select: blogSelectConfig(),
      });
    } 
    else if (user.role === "ADMIN") {
      // Admin sees only his blogs
      blogs = await prisma.blog.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        select: blogSelectConfig(),
      });
    } 
    else {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(blogs);

  } catch (err) {
    console.error("GET BLOGS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};
// export const getBlogs = async (req, res) => {
//   try {
//     const blogs = await prisma.blog.findMany({
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
//         // contents: {
//         //   where: { type: "image" }, // only thumbnail
//         //   take: 1,
//         //   select: {
//         //     content: true,
//         //   },
//         // },
//         contents: {
//           orderBy: { order: "asc" },
//         },
//       },
//     });

//     res.json(blogs);

//   } catch (err) {
//     console.error("GET BLOGS ERROR:", err);
//     res.status(500).json({ error: "Failed to fetch blogs" });
//   }
// };







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

    // 🔹 Find blog by id
    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // 🔹 Permission Check
    if (user.role !== "SUPERADMIN") {
      if (blog.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this blog",
        });
      }
    }

    // 🔹 Delete blog
    await prisma.blog.delete({
      where: { id },
    });

    res.json({ message: "Blog deleted successfully" });

  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const deleteBlog = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // 🔹 Fetch fresh user
//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     if (!user.isActive) {
//       return res.status(403).json({ message: "Account is blocked" });
//     }

//     const blog = await prisma.blog.findUnique({
//       where: { id },
//     });

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     //Permission Check
//     if (user.role !== "SUPERADMIN") {
//       if (blog.userId !== user.id) {
//         return res.status(403).json({
//           message: "Not allowed to delete this blog",
//         });
//       }
//     }

//     //Delete Blog (content blocks auto delete)
//     await prisma.blog.delete({
//       where: { id },
//     });

//     res.json({ message: "Blog deleted successfully" });

//   } catch (err) {
//     console.error("DELETE BLOG ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };




// UPDATE BLOG
// export const updateBlog = async (req, res) => {
//   try {
//     const { slug: currentSlug } = req.params; // 🔹 slug from URL
//     const { slug: newSlug, title, keywords, description, contents } = req.body;

//     // 🔹 Fetch fresh user
//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     if (!user.isActive) {
//       return res.status(403).json({ message: "Account is blocked" });
//     }

//     // 🔹 Find blog by slug
//     const blog = await prisma.blog.findUnique({
//       where: { slug: currentSlug },
//       include: { contents: true },
//     });

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     // 🔹 Permission Rules
//     if (user.role !== "SUPERADMIN") {

//       if (!user.allowBlogs) {
//         return res.status(403).json({
//           message: "You are not allowed to update blogs",
//         });
//       }

//       if (blog.userId !== user.id) {
//         return res.status(403).json({
//           message: "Not allowed to update this blog",
//         });
//       }
//     }

//     // 🔹 Parse contents (form-data)
//     let parsedContents = contents ? JSON.parse(contents) : null;

//     // 🔹 Handle new image upload
//     let newImageUrl = null;
//     if (req.files && req.files.length > 0) {
//       const imageFile = req.files[0];
//       const filePath = imageFile.path.split("uploads")[1].replace(/\\/g, "/");
//       newImageUrl = `${req.protocol}://${req.get("host")}/uploads${filePath}`;

//       // Delete old image
//       const oldImageBlock = blog.contents.find(b => b.type === "image");

//       if (oldImageBlock) {
//         const oldPath = oldImageBlock.content.replace(
//           `${req.protocol}://${req.get("host")}/`,
//           ""
//         );

//         if (fs.existsSync(oldPath)) {
//           fs.unlinkSync(oldPath);
//         }
//       }
//     }

//     if (parsedContents) {
//       // Replace image block if new image uploaded
//       parsedContents = parsedContents.map(block => {
//         if (block.type === "image" && newImageUrl) {
//           return { ...block, content: newImageUrl };
//         }
//         return block;
//       });

//       // Validate only 1 image
//       const imageBlocks = parsedContents.filter(c => c.type === "image");
//       if (imageBlocks.length > 1) {
//         return res.status(400).json({
//           message: "Only one image section allowed",
//         });
//       }
//     }

//     await prisma.$transaction(async (tx) => {

//       // 🔹 Update blog fields (use OLD slug in where)
//       await tx.blog.update({
//         where: { slug: currentSlug },
//         data: {
//           slug: newSlug ?? blog.slug, // keep old slug if not provided
//           title,
//           keywords,
//           description,
//         },
//       });

//       if (!parsedContents) return;

//       const incomingIds = parsedContents
//         .filter(c => c.id)
//         .map(c => c.id);

//       // 🔹 Delete removed blocks
//       await tx.blogContentBlock.deleteMany({
//         where: {
//           blogId: blog.id, // ⚠ still use blog.id internally
//           id: { notIn: incomingIds.length ? incomingIds : [""] },
//         },
//       });

//       // 🔹 Update/Create blocks
//       for (let index = 0; index < parsedContents.length; index++) {
//         const block = parsedContents[index];

//         const existingBlock = blog.contents.find(b => b.id === block.id);

//         let finalOrder;

//         if (typeof block.order === "number") {
//           finalOrder = block.order;
//         } else if (existingBlock) {
//           finalOrder = existingBlock.order;
//         } else {
//           finalOrder = index + 1;
//         }

//         if (block.id) {
//           await tx.blogContentBlock.update({
//             where: { id: block.id },
//             data: {
//               type: block.type,
//               content: block.content,
//               order: finalOrder,
//             },
//           });
//         } else {
//           await tx.blogContentBlock.create({
//             data: {
//               blogId: blog.id,
//               type: block.type,
//               content: block.content,
//               order: finalOrder,
//             },
//           });
//         }
//       }
//     });

//     // 🔹 Return updated blog (by NEW slug if changed)
//     const updatedBlog = await prisma.blog.findUnique({
//       where: { slug: newSlug ?? currentSlug },
//       include: {
//         contents: {
//           orderBy: { order: "asc" },
//         },
//       },
//     });

//     res.json({ blog: updatedBlog });

//   } catch (err) {
//     console.error("UPDATE BLOG ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };
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

    // Parse contents (form-data)
    let parsedContents = contents ? JSON.parse(contents) : null;

    // Handle new image upload
    let newImageUrl = null;
    if (req.files && req.files.length > 0) {
      // const imageFile = req.files[0];
      // newImageUrl = `${req.protocol}://${req.get("host")}/${imageFile.path.replace(/\\/g, "/")}`;
      const imageFile = req.files[0];
      const filePath = imageFile.path.split("uploads")[1].replace(/\\/g, "/");
      newImageUrl = `${req.protocol}://${req.get("host")}/uploads${filePath}`;

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

      if (!parsedContents) return;

      const incomingIds = parsedContents
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
      // for (const block of parsedContents) {
      //   if (block.id) {
      //     await tx.blogContentBlock.update({
      //       where: { id: block.id },
      //       data: {
      //         type: block.type,
      //         content: block.content,
      //         order: block.order,
      //       },
      //     });
      //   } else {
      //     await tx.blogContentBlock.create({
      //       data: {
      //         blogId: id,
      //         type: block.type,
      //         content: block.content,
      //         order: block.order,
      //       },
      //     });
      //   }
      // }
      for (let index = 0; index < parsedContents.length; index++) {
        const block = parsedContents[index];

        // 🔹 Find existing DB block (if updating)
        const existingBlock = blog.contents.find(b => b.id === block.id);

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
          await tx.blogContentBlock.update({
            where: { id: block.id },
            data: {
              type: block.type,
              content: block.content,
              order: finalOrder,
            },
          });
        } else {
          await tx.blogContentBlock.create({
            data: {
              blogId: id,
              type: block.type,
              content: block.content,
              order: finalOrder,
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

  }
  }catch(err) {
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  };
};