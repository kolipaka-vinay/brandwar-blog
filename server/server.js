import express from "express";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";   // rename from clientBlogRoutes if needed
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const PORT = 4000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());   // instead of bodyParser

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/blogs", blogRoutes);

// STATIC FILES (Uploads)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


//PERMANENT ADMIN DELETE
import cron from "node-cron";

const prisma = new PrismaClient();

// Runs every day at midnight
cron.schedule("0 0 * * *", async () => {
  try {
    const gracePeriodDays = 200;

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - gracePeriodDays);

    const deletedUsers = await prisma.user.deleteMany({
      where: {
        isDeleted: true,
        deletedAt: {
          lt: cutoffDate,
        },
      },
    });

    console.log(
      `Permanent cleanup completed. ${deletedUsers.count} users deleted.`
    );

  } catch (err) {
    console.error("CRON CLEANUP ERROR:", err);
  }
});

// TEST ROUTE
// app.get("/test", (req, res) => {
//   res.send("Server working");
// });

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
