import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import { router as clientAuthRoutes } from "./routes/clientAuthRoutes.js";
import { router as superAdminRoutes } from "./routes/superAdminRoutes.js";
import { uploadsPath } from "./controllers/superAdminController.js";
import clientBlogRoutes from "./routes/clientBlogRoutes.js";
import path from "path";

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/all-clients", superAdminRoutes);

app.use("/api/client", clientAuthRoutes);
app.use("/api/blogs", clientBlogRoutes);
// serve uploaded files
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} http://localhost:${PORT}`);
});
