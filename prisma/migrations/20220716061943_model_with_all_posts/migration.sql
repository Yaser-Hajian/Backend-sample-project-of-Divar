-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" BIGINT,
    "Description" TEXT,
    "pictures" TEXT[],
    "tags" TEXT[],
    "isCarPost" BOOLEAN NOT NULL,
    "isHousePost" BOOLEAN NOT NULL,
    "isFurniturePost" BOOLEAN NOT NULL,
    "userID" TEXT NOT NULL,
    "userStaredID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarPost" (
    "id" TEXT NOT NULL,
    "usage" BIGINT NOT NULL,
    "color" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "motorCondition" TEXT NOT NULL,
    "gearbox" TEXT NOT NULL,
    "postID" TEXT NOT NULL,

    CONSTRAINT "CarPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousePost" (
    "id" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "yearOfBuild" INTEGER NOT NULL,
    "pricePerMeter" INTEGER,
    "numberOfRooms" INTEGER NOT NULL,
    "numberOfTotalFloors" INTEGER NOT NULL,
    "numberOfFloor" INTEGER NOT NULL,
    "hasElavator" BOOLEAN NOT NULL,
    "hasParking" BOOLEAN NOT NULL,
    "postID" TEXT NOT NULL,

    CONSTRAINT "HousePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FurniturePost" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "postID" TEXT NOT NULL,

    CONSTRAINT "FurniturePost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarPost_postID_key" ON "CarPost"("postID");

-- CreateIndex
CREATE UNIQUE INDEX "HousePost_postID_key" ON "HousePost"("postID");

-- CreateIndex
CREATE UNIQUE INDEX "FurniturePost_postID_key" ON "FurniturePost"("postID");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userStaredID_fkey" FOREIGN KEY ("userStaredID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarPost" ADD CONSTRAINT "CarPost_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousePost" ADD CONSTRAINT "HousePost_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FurniturePost" ADD CONSTRAINT "FurniturePost_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
