/*
  Warnings:

  - You are about to drop the `ContentBlock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentBlock" DROP CONSTRAINT "ContentBlock_blogId_fkey";

-- DropForeignKey
ALTER TABLE "ContentBlock" DROP CONSTRAINT "ContentBlock_newsId_fkey";

-- DropTable
DROP TABLE "ContentBlock";

-- CreateTable
CREATE TABLE "BlogContentBlock" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "BlogContentBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsContentBlock" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newsId" TEXT NOT NULL,

    CONSTRAINT "NewsContentBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BlogContentBlock_blogId_order_idx" ON "BlogContentBlock"("blogId", "order");

-- CreateIndex
CREATE INDEX "NewsContentBlock_newsId_order_idx" ON "NewsContentBlock"("newsId", "order");

-- AddForeignKey
ALTER TABLE "BlogContentBlock" ADD CONSTRAINT "BlogContentBlock_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsContentBlock" ADD CONSTRAINT "NewsContentBlock_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
