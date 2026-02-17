import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireSuperAdmin } from "../middleware/requireSuperAdmin.js";
import {
  createAdmin,
  updateAdminPermissions,
  getAdmins,
} from "../controllers/adminController.js";

const router = express.Router();

// Only SuperAdmin can manage admins
router.post("/", requireAuth, requireSuperAdmin, createAdmin);
router.put("/:id", requireAuth, requireSuperAdmin, updateAdminPermissions);
router.get("/", requireAuth, requireSuperAdmin, getAdmins);

export default router;
