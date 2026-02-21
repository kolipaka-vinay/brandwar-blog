import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireSuperAdmin } from './../middleware/requireSuperAdmin.js';
import {
  createAdmin,
  deleteAdmin,
  getAdminById,
  getAdmins,
  updateAdmin,
} from "../controllers/adminController.js";

const router = express.Router();
 
// Only SuperAdmin can manage admins
router.post("/", requireAuth, requireSuperAdmin, createAdmin);
router.put("/:id/update", requireAuth, requireSuperAdmin, updateAdmin);
router.get("/", requireAuth, requireSuperAdmin, getAdmins);
router.get("/:id",requireAuth,requireSuperAdmin,getAdminById);
// router.get("/", requireAuth, requireSuperAdmin, getInactiveAdmins);
router.delete("/:id",requireAuth,requireSuperAdmin, deleteAdmin);
export default router;