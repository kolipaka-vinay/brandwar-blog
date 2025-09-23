// server/controllers/clientAuthController.js
import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";
const SALT_ROUNDS = 10;

// LOGIN
export const login = async (req, res) => {
  const { contactNumber, password } = req.body;

  try {
    const client = await prisma.client.findFirst({ where: { contactNumber } });

    if (!client) return res.status(401).json({ message: "Client not found" });

    // Compare input password with hashed password
    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: client.id, contactNumber }, JWT_SECRET);

    res.json({
      id: client.id,
      message: "Login successful",
      passwordChanged: client.passwordChanged,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// CHANGE PASSWORD
export const changePassword = async (req, res) => {
  const { contactNumber, newPassword } = req.body;

  if (!contactNumber || !newPassword) {
    return res
      .status(400)
      .json({ message: "contactNumber and newPassword required" });
  }

  try {
    const client = await prisma.client.findFirst({ where: { contactNumber } });
    if (!client) return res.status(404).json({ message: "Client not found" });

    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await prisma.client.update({
      where: { id: client.id },
      data: { password: hashedPassword, passwordChanged: true },
    });

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ONE-TIME: hash existing default passwords
export const hashDefaultPasswords = async () => {
  const clients = await prisma.client.findMany();

  for (const client of clients) {
    if (client.password === "blog@123") {
      const hashed = await bcrypt.hash(client.password, SALT_ROUNDS);
      await prisma.client.update({
        where: { id: client.id },
        data: { password: hashed },
      });
      console.log(`Hashed default password for client ${client.id}`);
    }
  }
  console.log("All default passwords hashed!");
};
