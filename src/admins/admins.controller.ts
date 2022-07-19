import { Body, Controller, ForbiddenException, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { AdminsService } from './admins.service';
import { Role } from 'src/globals/enums/role.enum';
import RoleGuard from 'src/auth/guards/roles.guard';
import { GetUser } from 'src/globals/decorators/get-user.decorator';
import { Admin } from '@prisma/client';
@Controller('admins')
export class AdminsController {
  constructor(private adminsService : AdminsService) {}

  @Get('me')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)
  getMe(@GetUser()admin : Admin) {
    return this.adminsService.getMe(admin);
  }

  @Post('signin')
  signin(@Body()dto: SignInDto) {
    return this.adminsService.signin(dto)
  }

  @Get('/requests')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)
  getPosts(@GetUser() admin : Admin){
    return this.adminsService.getAllRequestedPosts(admin);
  }

  @Put('/approve/:id')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)
  approvePost(@Param('id')id : string , @GetUser()admin : Admin){
    return this.adminsService.approvePost(id , admin)
  }

}
