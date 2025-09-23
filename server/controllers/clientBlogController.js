// server/controllers/clientBlogController.js
import prisma from "../config/prismaClient.js";
import fs from "fs";
import path from "path";

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const { clientId, slug, title, keywords, description, sections } = req.body;

    // Parse sections if sent as JSON string
    const parsedSections =
      typeof sections === "string" ? JSON.parse(sections) : sections;
    // Create blog first
    const blog = await prisma.blog.create({
      data: { clientId: req.user.id, slug, title, keywords, description },
    });

    // Map files to sections
    const filesMap = {};
    req.files?.forEach((file) => {
      filesMap[file.fieldname] = file;
    });

    // Create sections
    for (let i = 0; i < parsedSections.length; i++) {
      const sec = parsedSections[i];
      let imageUrl = null;

      if (sec.type === "image") {
        const fileKey = `image_${i}`;
        if (filesMap[fileKey]) {
          imageUrl = `/uploads/${filesMap[fileKey].filename}`;
        }
      }

      await prisma.blogSection.create({
        data: {
          blogId: blog.id,
          order: i,
          type: sec.type,
          text: sec.type === "text" ? sec.content : null,
          imageUrl: sec.type === "image" ? imageUrl : null,
          imageAlt: sec.type === "image" ? sec.alt : null,
        },
      });
    }

    res.json({ blog });
  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: { sections: true, client: true },
    });
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

// Get blog by slug
// export const getBlogBySlug = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     const blog = await prisma.blog.findUnique({
//       where: { slug },
//       include: { sections: true, client: true },
//     });
//     if (!blog) return res.status(404).json({ error: "Blog not found" });
//     res.json(blog);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch blog" });
//   }
// };

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete all related sections first
    await prisma.blogSection.deleteMany({ where: { blogId: id } });

    // Then delete the blog
    await prisma.blog.delete({ where: { id } });

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, title, keywords, description, sections } = req.body;

    const parsedSections =
      typeof sections === "string" ? JSON.parse(sections) : sections;

    // Update blog
    const blog = await prisma.blog.update({
      where: { id },
      data: { slug, title, keywords, description },
    });

    // Delete old sections
    await prisma.blogSection.deleteMany({ where: { blogId: id } });

    // Map files
    const filesMap = {};
    req.files?.forEach((file) => {
      filesMap[file.fieldname] = file;
    });

    // Add new sections
    for (let i = 0; i < parsedSections.length; i++) {
      const sec = parsedSections[i];
      let imageUrl = null;

      if (sec.type === "image") {
        const fileKey = `image_${i}`;
        if (filesMap[fileKey])
          imageUrl = `/uploads/${filesMap[fileKey].filename}`;
      }

      await prisma.blogSection.create({
        data: {
          blogId: blog.id,
          order: i,
          type: sec.type,
          text: sec.type === "text" ? sec.content : null,
          imageUrl: sec.type === "image" ? imageUrl : null,
          imageAlt: sec.type === "image" ? sec.alt : null,
        },
      });
    }

    res.json({ blog });
  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
