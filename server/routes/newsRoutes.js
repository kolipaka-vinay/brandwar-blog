import express from "express";
import {
  createNews,
  getNews,
  deleteNews,
  updateNews,
} from "../controllers/newsController.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Routes
router.post("/", requireAuth, upload.any(), createNews);
router.put("/:id", requireAuth, upload.any(), updateNews);
router.get("/",requireAuth,getNews);
router.delete("/:id", requireAuth, deleteNews);

export default router;
