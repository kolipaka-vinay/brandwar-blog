// routes/clientAuthRoutes.js
import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";
import { login } from "../controllers/clientAuthController.js";

export const router = express.Router();
const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

// LOGIN route
router.post("/login", login);

// CHANGE PASSWORD route
router.post("/change-password", async (req, res) => {
  const { id, newPassword } = req.body;

  if (!id || !newPassword) {
    return res.status(400).json({ error: "id and newPassword are required" });
  }

  try {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    // Update password and mark passwordChanged true
    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        password: hashedPassword,
        passwordChanged: true,
      },
    });

    res.json({
      message: "Password updated successfully",
      client: updatedClient,
    });
  } catch (err) {
    console.error("Change password error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
