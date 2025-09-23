import express from "express";
import {
  getAllClients,
  getClientById,
  updateClient,
  createClient,
  uploadFile,
  upload, // multer instance
} from "../controllers/superAdminController.js";

export const router = express.Router();

// CLIENT endpoints
router.get("/", getAllClients);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.post("/", createClient);

// UPLOAD endpoint
router.post("/upload", upload.single("file"), uploadFile);
