import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from 'src/globals/decorators/get-user.decorator';
import { CreateFurniturePostsDto } from './dto/create-furniture-post.dto';
import { FurniturePostsService } from './furniture-posts.service';

@Controller('profile/furniturePosts')
@UseGuards(JwtAuthGuard)
export class FurniturePostsController {
  constructor(private furniturePostsService: FurniturePostsService) {}
  
  @Post('add')
  createFurniturePosts(
    @Body() createFurniturePostsDto: CreateFurniturePostsDto,
    @GetUser() user: User,
  ) {
    return this.furniturePostsService.createFurniturePost(createFurniturePostsDto , user);
  }
}
