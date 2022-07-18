import { Controller, Get } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService : PostsService){}

    @Get()
    getAllPosts(){
        return this.postsService.getAllPosts()
    }

    @Get('carPosts')
    getCarPosts(){
        return this.postsService.getCarPosts()
    }

    @Get('housePosts')
    getHousePosts(){
        return this.postsService.getHousePosts()
    }

    @Get('furniturePosts')
    getFurniturePosts(){
        return this.postsService.getFurniturePosts()
    }
}