import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

// Create Admin
export const createAdmin = async (req, res) => {
  try {
    const {
      company_name,
      website,
      logo,
      primary_color,
      secondary_color,
      name,
      contact_number,
      address,
      email,
      password,
      allowBlogs,
      allowNews,
      allowImages,
      allowVideos,
      endDate
    } = req.body;

    // Check existing email
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const admin = await prisma.user.create({
      data: {
        company_name,
        website,
        logo,
        primary_color,
        secondary_color,
        name,
        contact_number,
        address,
        email,
        password: hashedPassword,
        role: "ADMIN",
        allowBlogs,
        allowNews,
        allowImages,
        allowVideos,
        endDate: new Date(endDate),
        isActive: true,
      },
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });

  } catch (err) {
    console.error("CREATE ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ADMIN UPDATE
export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      company_name,
      website,
      logo,
      primary_color,
      secondary_color,
      name,
      contact_number,
      email,
      address,
      allowBlogs,
      allowNews,
      allowImages,
      allowVideos,
      isActive,
      startDate,
      endDate,
    } = req.body;

    const data = {};

    if (company_name !== undefined) data.company_name = company_name;
    if (website !== undefined) data.website = website;
    if (logo !== undefined) data.logo = logo;
    if (primary_color !== undefined) data.primary_color = primary_color;
    if (secondary_color !== undefined) data.secondary_color = secondary_color;
    if (name !== undefined) data.name = name;
    if (contact_number !== undefined) data.contact_number = contact_number;
    if (email !== undefined) data.email = email;
    if (address !== undefined) data.address = address;
    if (allowBlogs !== undefined) data.allowBlogs = allowBlogs;
    if (allowNews !== undefined) data.allowNews = allowNews;
    if (allowImages !== undefined) data.allowImages = allowImages;
    if (allowVideos !== undefined) data.allowVideos = allowVideos;
    if (isActive !== undefined) data.isActive = isActive;
    if (startDate !== undefined) data.startDate = new Date(startDate);
    if (endDate !== undefined) data.endDate = new Date(endDate);

    const updated = await prisma.user.update({
      where: { id },
      data,
    });

    res.json({
      message: "Admin updated successfully",
      updated,
    });

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

      // TO GET ONLY ACTIVE ADMINS
      // where: {
      //   role: "ADMIN",
      //   isActive: true,
      //   // endDate: {
      //   //   gte: new Date(),
      //   // },
      // },

      select: {
        id: true,
        company_name: true,
        name: true,
        email: true,
        contact_number: true,
        website: true,
        primary_color: true,
        secondary_color: true,
        logo:true,
        allowBlogs: true,
        allowNews: true,
        allowImages: true,
        allowVideos:true,
        startDate: true,
        endDate: true,
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(admins);

  } catch (err) {
    console.error("GET ADMINS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// List Active Admins
// export const getInactiveAdmins = async (req, res) => {
//   try {
//     const admins = await prisma.user.findMany({
//       // where: { role: "ADMIN" },

//       // TO GET ONLY ACTIVE ADMINS
//       where: {
//         role: "ADMIN",
//         isActive: false,
//         // endDate: {
//         //   gte: new Date(),
//         // },
//       },

//       select: {
//         id: true,
//         company_name: true,
//         name: true,
//         email: true,
//         contact_number: true,
//         website: true,
//         primary_color: true,
//         secondary_color: true,
//         allowBlogs: true,
//         allowNews: true,
//         allowImages: true,
//         startDate: true,
//         endDate: true,
//         isActive: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     res.json(admins);

//   } catch (err) {
//     console.error("GET ADMINS ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };


// GET SINGLE ADMIN
export const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    const admin = await prisma.user.findFirst({
      where: {
        id,
        role: "ADMIN", // ensures only admin can be fetched
      },
      select: {
        id: true,
        company_name: true,
        name: true,
        email: true,
        contact_number: true,
        website: true,
        primary_color: true,
        secondary_color: true,
        logo:true,
        allowBlogs: true,
        allowNews: true,
        allowImages: true,
        allowVideos:true,
        startDate: true,
        endDate: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json(admin);

  } catch (err) {
    console.error("GET ADMIN BY ID ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// SOFT DELETE ADMIN
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.user.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
        isActive: false,
      },
    });

    res.json({
      message: "Admin soft deleted. Can be restored within 200 days.",
    });

  } catch (err) {
    console.error("DELETE ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};


// RESTORE ADMIN FROM SOFT DELETE
export const restoreAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user || !user.isDeleted) {
      return res.status(404).json({ message: "User not found or not deleted" });
    }

    const gracePeriodDays = 200;
    const now = new Date();
    const diffDays =
      (now - new Date(user.deletedAt)) / (1000 * 60 * 60 * 24);

    if (diffDays > gracePeriodDays) {
      return res.status(400).json({
        message: "Grace period expired. Cannot restore.",
      });
    }

    await prisma.user.update({
      where: { id },
      data: {
        isDeleted: false,
        deletedAt: null,
        isActive: true,
      },
    });

    res.json({ message: "Admin restored successfully" });

  } catch (err) {
    console.error("RESTORE ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};



// DELETE PERMANENT ADMIN
// export const permanentDeleteAdmin = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await prisma.user.findUnique({
//       where: { id },
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Prevent self-deleting
//     if (req.user.id === id) {
//       return res.status(400).json({
//         message: "You cannot delete yourself",
//       });
//     }

//     // Prevent deleting SUPERADMIN
//     if (user.role === "SUPERADMIN") {
//       return res.status(403).json({
//         message: "Cannot delete SUPERADMIN",
//       });
//     }

//     await prisma.user.delete({
//       where: { id },
//     });

//     res.json({
//       message: "Admin permanently deleted successfully",
//     });

//   } catch (err) {
//     console.error("DELETE ADMIN ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

