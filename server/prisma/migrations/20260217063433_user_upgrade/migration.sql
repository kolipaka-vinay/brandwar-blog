/*
  Warnings:

  - The `keywords` column on the `Blog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `title` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `allowVideos` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `canCreate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `folderId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primary_color` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondary_color` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Video" DROP CONSTRAINT "Video_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" ALTER COLUMN "description" DROP NOT NULL,
DROP COLUMN "keywords",
ADD COLUMN     "keywords" JSONB;

-- AlterTable
ALTER TABLE "public"."Image" DROP COLUMN "title",
DROP COLUMN "userId",
ADD COLUMN     "folderId" TEXT NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."News" ADD COLUMN     "description" TEXT,
ADD COLUMN     "keywords" JSONB,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "allowVideos",
DROP COLUMN "canCreate",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "company_name" TEXT NOT NULL,
ADD COLUMN     "contact_number" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "primary_color" TEXT NOT NULL,
ADD COLUMN     "secondary_color" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "website" TEXT NOT NULL,
ALTER COLUMN "allowBlogs" SET DEFAULT false,
ALTER COLUMN "allowNews" SET DEFAULT false,
ALTER COLUMN "allowImages" SET DEFAULT false;

-- DropTable
DROP TABLE "public"."Video";

-- CreateTable
CREATE TABLE "public"."ContentBlock" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blogId" TEXT,
    "newsId" TEXT,

    CONSTRAINT "ContentBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ImageFolder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImageFolder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContentBlock_blogId_order_idx" ON "public"."ContentBlock"("blogId", "order");

-- CreateIndex
CREATE INDEX "ContentBlock_newsId_order_idx" ON "public"."ContentBlock"("newsId", "order");

-- CreateIndex
CREATE INDEX "ImageFolder_userId_idx" ON "public"."ImageFolder"("userId");

-- CreateIndex
CREATE INDEX "Image_folderId_idx" ON "public"."Image"("folderId");

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "public"."News"("slug");

-- AddForeignKey
ALTER TABLE "public"."ContentBlock" ADD CONSTRAINT "ContentBlock_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContentBlock" ADD CONSTRAINT "ContentBlock_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ImageFolder" ADD CONSTRAINT "ImageFolder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "public"."ImageFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
