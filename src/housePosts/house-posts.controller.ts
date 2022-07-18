import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from 'src/globals/decorators/get-user.decorator';
import { CreateHousePostsDto } from './dto/create-house-post.dto';
import { HousePostsService } from './house-posts.service';

@Controller('profile/housePosts')
export class HousePostsController {
    constructor(private housePostsService : HousePostsService){}

    @Post('add')
    @UseGuards(JwtAuthGuard)
    createHousePost(@Body()createHousePostDto : CreateHousePostsDto , @GetUser()user : User){
        return this.housePostsService.createHousePost(createHousePostDto , user)
    }
}
