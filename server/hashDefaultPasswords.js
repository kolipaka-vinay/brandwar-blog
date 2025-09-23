// server/hashDefaultPasswords.js
import { PrismaClient } from "../server/generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function hashDefaults() {
  const clients = await prisma.client.findMany();

  for (const client of clients) {
    // Only hash if password is still default
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
  process.exit();
}

hashDefaults().catch((err) => {
  console.error(err);
  process.exit(1);
});
