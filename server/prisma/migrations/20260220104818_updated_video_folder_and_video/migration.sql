/*
  Warnings:

  - Added the required column `userId` to the `VideoFolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "allowVideos" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "VideoFolder" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "VideoFolder" ADD CONSTRAINT "VideoFolder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
