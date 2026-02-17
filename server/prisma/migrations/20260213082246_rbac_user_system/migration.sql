/*
  Warnings:

  - You are about to drop the column `clientId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `BlogSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('SUPERADMIN', 'ADMIN');

-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."BlogSection" DROP CONSTRAINT "BlogSection_blogId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."News" DROP CONSTRAINT "News_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Video" DROP CONSTRAINT "Video_clientId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "clientId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Image" DROP COLUMN "clientId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."News" DROP COLUMN "clientId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Video" DROP COLUMN "clientId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."BlogSection";

-- DropTable
DROP TABLE "public"."Client";

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'ADMIN',
    "canCreate" BOOLEAN NOT NULL DEFAULT true,
    "allowBlogs" BOOLEAN NOT NULL DEFAULT true,
    "allowNews" BOOLEAN NOT NULL DEFAULT true,
    "allowImages" BOOLEAN NOT NULL DEFAULT true,
    "allowVideos" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."News" ADD CONSTRAINT "News_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Video" ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
