import { Controller } from "@nestjs/common";
import { FurniturePostsService } from "./furniture-posts.service";
@Controller('profile/furniturePosts')
export class FurniturePostsController{
    constructor(private furniturePostsService : FurniturePostsService){}

    
}