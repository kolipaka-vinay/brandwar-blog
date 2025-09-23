import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createBlog,
  getBlogs,
  // getBlogBySlug,
  deleteBlog,
  updateBlog,
} from "../controllers/clientBlogController.js";
import { authenticateUser } from "../config/middleware.js";

const router = express.Router();

// Ensure upload folder exists
const uploadDir = path.join("public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.post("/", upload.any(), authenticateUser, createBlog);
router.put("/:id", upload.any(), updateBlog);

router.get("/", getBlogs);
// router.get("/:slug", getBlogBySlug);
router.delete("/:id", deleteBlog);

export default router;
