-- AlterTable
ALTER TABLE "public"."Client" ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'blog@123',
ADD COLUMN     "passwordChanged" BOOLEAN NOT NULL DEFAULT false;
