/*
  Warnings:

  - You are about to drop the column `hasElavator` on the `HousePost` table. All the data in the column will be lost.
  - Added the required column `hasElevator` to the `HousePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HousePost" DROP COLUMN "hasElavator",
ADD COLUMN     "hasElevator" BOOLEAN NOT NULL;
