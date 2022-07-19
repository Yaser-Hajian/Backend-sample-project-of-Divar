import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from '../globals/decorators/get-user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    delete user.hash;
    return user;
  }
  @Put('edit')
  editProfile(@Body()updateUserDto : UpdateUserDto ,@GetUser()user : User){
    return this,this.usersService.editProfile(updateUserDto , user)
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
