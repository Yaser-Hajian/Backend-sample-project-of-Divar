import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { FurniturePostsController } from "./furniture-posts.controller";
import { FurniturePostsService } from "./furniture-posts.service";

@Module({
    imports : [PrismaModule],
    controllers : [FurniturePostsController],
    providers:[FurniturePostsService]
})
export class FurniturePostsModule {

}