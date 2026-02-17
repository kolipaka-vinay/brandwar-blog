import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

// Create Admin
export const createAdmin = async (req, res) => {
  try {
    const {
      email,
      password,
      allowBlogs,
      allowNews,
      allowImages,
      allowVideos,
      canCreate,
    } = req.body;

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const admin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
        allowBlogs,
        allowNews,
        allowImages,
        allowVideos,
        canCreate,
      },
    });

    res.json({ admin });

  } catch (err) {
    console.error("CREATE ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// Update Admin Permissions
export const updateAdminPermissions = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      allowBlogs,
      allowNews,
      allowImages,
      allowVideos,
      canCreate,
      isActive,
    } = req.body;

    const updated = await prisma.user.update({
      where: { id },
      data: {
        allowBlogs,
        allowNews,
        allowImages,
        allowVideos,
        canCreate,
        isActive,
      },
    });

    res.json({ updated });

  } catch (err) {
    console.error("UPDATE ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// List Admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.user.findMany({
      where: { role: "ADMIN" },
      select: {
        id: true,
        email: true,
        allowBlogs: true,
        allowNews: true,
        allowImages: true,
        allowVideos: true,
        canCreate: true,
        isActive: true,
      },
    });

    res.json(admins);

  } catch (err) {
    console.error("GET ADMINS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
