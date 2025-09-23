import { PrismaClient } from "../generated/prisma/index.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- UPLOAD CONFIG ---
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
export const upload = multer({ storage }); // export to use in route

// --- SUPER ADMIN CLIENT CONTROLLERS ---
export const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany();
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await prisma.client.findUnique({ where: { id } });
    if (!client) return res.status(404).json({ error: "Client not found" });
    res.json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const {
    companyName,
    website,
    logoUrl,
    brandColors,
    modulesEnabled,
    contactName,
    contactNumber,
    address,
  } = req.body;

  try {
    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        companyName,
        website,
        logoUrl,
        brandColors,
        modulesEnabled,
        contactName,
        contactNumber,
        address,
      },
    });
    res.json(updatedClient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update client" });
  }
};

export const createClient = async (req, res) => {
  const {
    companyName,
    website,
    logoUrl,
    brandColors,
    modulesEnabled,
    contactName,
    contactNumber,
    address,
  } = req.body;

  if (!companyName || !modulesEnabled) {
    return res
      .status(400)
      .json({ error: "companyName and modulesEnabled are required" });
  }

  try {
    const newClient = await prisma.client.create({
      data: {
        companyName,
        website,
        logoUrl,
        brandColors,
        modulesEnabled,
        contactName,
        contactNumber,
        address,
      },
    });
    res.status(201).json(newClient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create client" });
  }
};

// --- UPLOAD CONTROLLER ---
export const uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.json({ url: fileUrl });
};

// export uploadDir so server.js can serve static files
export const uploadsPath = uploadDir;
