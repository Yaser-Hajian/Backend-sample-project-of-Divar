/*
  Warnings:

  - You are about to drop the column `isCarPost` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `isFurniturePost` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `isHousePost` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "isCarPost",
DROP COLUMN "isFurniturePost",
DROP COLUMN "isHousePost";
