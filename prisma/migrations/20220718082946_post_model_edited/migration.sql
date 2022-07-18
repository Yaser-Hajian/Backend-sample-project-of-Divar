-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userStaredID_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "userStaredID" DROP NOT NULL,
ALTER COLUMN "adminId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userStaredID_fkey" FOREIGN KEY ("userStaredID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
