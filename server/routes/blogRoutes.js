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
} from "../controllers/blogController.js";
import { requireAuth } from "../middleware/requireAuth.js"; 

const router = express.Router();

import { upload } from "../middleware/uploadMiddleware.js";

// Routes
router.post("/",requireAuth, upload.any(), createBlog);
router.put("/:id",requireAuth, upload.any(), updateBlog);
router.get("/", getBlogs);
// router.get("/:slug", getBlogBySlug);
router.delete("/:id",requireAuth, deleteBlog);

export default router;