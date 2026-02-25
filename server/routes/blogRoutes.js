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
router.get("/",requireAuth, getBlogs);
router.put("/:id",requireAuth, upload.any(), updateBlog);
router.delete("/:id",requireAuth, deleteBlog);

//slug route
// router.put("/:slug",requireAuth, upload.any(), updateBlog);
// router.delete("/:slug",requireAuth, deleteBlog);
// router.get("/:slug", getBlogBySlug);
export default router;