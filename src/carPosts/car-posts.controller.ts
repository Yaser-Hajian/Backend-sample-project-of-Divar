import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from 'src/globals/decorators/get-user.decorator';
import { CarPostsService } from './car-posts.service';
import { CreateCarPostsDto } from './dto/create-car-post.dto';

@Controller('profile/carPosts')
@UseGuards(JwtAuthGuard)
export class CarPostsController {
  constructor(private carPostsService: CarPostsService) {}
  @Post('add')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarPostDto: CreateCarPostsDto, @GetUser() user: User) {
    return this.carPostsService.create(createCarPostDto , user);
  }
}
