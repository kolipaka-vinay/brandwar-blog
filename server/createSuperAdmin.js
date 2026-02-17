import { PrismaClient } from "./generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function createSuperAdmin() {
  try {
    // Prevent duplicate superadmin
    const existing = await prisma.user.findFirst({
      where: { role: "SUPERADMIN" }
    });

    if (existing) {
      console.log("SUPERADMIN already exists");
      return;
    }

    const hashed = await bcrypt.hash("super123", 10);

    await prisma.user.create({
      data: {
        // Required fields
        company_name: "Main Company",
        website: "https://maincompany.com",
        email: "super@admin.com",
        logo: "default-logo.png",
        primary_color: "#000000",
        secondary_color: "#ffffff",

        name: "Super Admin",
        contact_number: "9999999999",
        address: "India",

        password: hashed,
        role: "SUPERADMIN",

        allowBlogs: true,
        allowNews: true,
        allowImages: true,

        endDate: new Date("2030-12-31"),
        isActive: true
      }
    });

    console.log("✅ SUPERADMIN CREATED");

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

createSuperAdmin();
