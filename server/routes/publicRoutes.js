import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

// PUBLIC BLOG ROUTE
router.get("/:website/blogs", async (req, res) => {
  const { website } = req.params;

  const admin = await prisma.admin.findUnique({
    where: { website }
  });

  if (!admin) return res.status(404).send("Admin not found");

  const blogs = await prisma.blog.findMany({
    where: {
      adminId: admin.id
    }
  });

  res.json(blogs);
});



// PUBLIC NEWS ROUTE
router.get("/:website/news", async (req, res) => {
  const { website } = req.params;

  const admin = await prisma.admin.findUnique({
    where: { website : website }
  });

  if (!admin) return res.status(404).send("Admin not found");

  const news = await prisma.news.findMany({
    where: {
      adminId: admin.id
    }
  });

  res.json(news);
});


router.get("/:website/videos", async (req, res) => {
  try {
    const { website } = req.params;

    // 1️⃣ Find admin by website
    const admin = await prisma.admin.findUnique({
      where: { website: website }
    });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 2️⃣ Get folders belonging ONLY to this admin
    const folders = await prisma.videoFolder.findMany({
      where: {
        userId: admin.id   // IMPORTANT: tenant isolation
      },
      include: {
        videos: {
          orderBy: { createdAt: "desc" }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    res.json(folders);

  } catch (err) {
    console.error("PUBLIC GET VIDEO FOLDERS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch video folders" });
  }
});


router.get("/:website/images", async (req, res) => {
  try {
    const { website } = req.params;

    // 1️⃣ Find admin by website
    const admin = await prisma.admin.findUnique({
      where: { website: website.toLowerCase() }
    });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 2️⃣ Fetch folders that belong ONLY to this admin
    const folders = await prisma.imageFolder.findMany({
      where: {
        userId: admin.id   // tenant isolation
      },
      include: {
        images: {
          orderBy: { createdAt: "desc" }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json(folders);

  } catch (error) {
    console.error("PUBLIC GET IMAGE FOLDERS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch image folders" });
  }
});
export default router;

