import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { GetUser } from './decorator/get-user.decorator';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    delete user.username;
    return user;
  }
  @Get('carPosts')
  getCarPosts(@GetUser() user: User) {
    return this.usersService.getCarPosts(user);
  }

  @Get('housePosts')
  getHousePosts(@GetUser() user: User) {
    return this.usersService.getHousePosts(user);
  }
  @Get('furniturePosts')
  getFurniturePosts(@GetUser() user: User) {
    return this.usersService.getFurniturePosts(user);
  }

  @Get('all')
  getAllPosts(@GetUser() user: User) {
    return this.usersService.getAllPosts(user);
  }
}
