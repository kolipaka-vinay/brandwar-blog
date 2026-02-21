import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";

export const login = async (req, res) => {

  const { contact_number, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { contact_number },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account disabled" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token,user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
