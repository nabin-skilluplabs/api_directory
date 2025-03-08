/*
  Warnings:

  - You are about to drop the `EmailVerify` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expiryAt` to the `emailConfirmation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emailConfirmation" ADD COLUMN     "expiryAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "EmailVerify";
