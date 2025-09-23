/*
  Warnings:

  - You are about to drop the column `content` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `imageAlt` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "content",
DROP COLUMN "imageAlt",
DROP COLUMN "imageUrl";

-- CreateTable
CREATE TABLE "public"."BlogSection" (
    "id" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT,
    "imageUrl" TEXT,
    "imageAlt" TEXT,

    CONSTRAINT "BlogSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."BlogSection" ADD CONSTRAINT "BlogSection_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
