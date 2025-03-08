/*
  Warnings:

  - You are about to drop the column `code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expiryAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "code",
DROP COLUMN "expiryAt";

-- CreateTable
CREATE TABLE "EmailVerify" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiryAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailVerify_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerify_email_key" ON "EmailVerify"("email");
