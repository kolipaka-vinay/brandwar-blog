import { upload } from "../middleware/uploadMiddleware.js";
import express from "express";
import {
  // Folder
  createImageFolder,
  updateImageFolder,
  deleteImageFolder,
  getImageFolders,

  // Image
  getImages,
  deleteImage,
  uploadImage,

} from "../controllers/imageController.js";

import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

// FOLDER ROUTES
router.post("/", requireAuth, createImageFolder);
router.get("/", requireAuth, getImageFolders);
router.put("/:id", requireAuth, updateImageFolder);
router.delete("/:id", requireAuth, deleteImageFolder);

// IMAGE ROUTES
router.get("/:folderId/", requireAuth, getImages);
router.post("/:folderId/", requireAuth, upload.single("image"),uploadImage);
router.delete("/images/:id", requireAuth, deleteImage);

export default router;
