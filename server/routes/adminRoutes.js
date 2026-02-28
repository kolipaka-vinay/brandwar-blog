import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireSuperAdmin } from './../middleware/requireSuperAdmin.js';
import {
  createAdmin,
  deleteAdmin,
  getAdminById,
  getAdmins,
  restoreAdmin,
  updateAdmin,
} from "../controllers/adminController.js";

import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Only SuperAdmin can manage admins
router.post("/", requireAuth, requireSuperAdmin, upload.single('logo'), createAdmin);
router.put("/:id/update", requireAuth, requireSuperAdmin, upload.single('logo'), updateAdmin);
router.put("/:id/restoreAdmin", requireAuth, requireSuperAdmin, restoreAdmin);
router.get("/", requireAuth, requireSuperAdmin, getAdmins);
router.get("/:id", requireAuth, requireSuperAdmin, getAdminById);
// router.get("/", requireAuth, requireSuperAdmin, getInactiveAdmins);
router.delete("/:id", requireAuth, requireSuperAdmin, deleteAdmin);
export default router;