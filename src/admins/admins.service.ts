import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Admin } from '@prisma/client';

@Injectable()
export class AdminsService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}
  async signin(dto: SignInDto) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!admin) {
      throw new ForbiddenException('Credentials incorrect.');
    }
    const passwordMatches = await bcrypt.compare(dto.password, admin.hash);
    if (!passwordMatches) {
      throw new ForbiddenException('Credentials incorrect.');
    }
    return this.authService.getJwtToken(admin.id);
  }

  async getAllRequestedPosts(admin: Admin) {
    return await this.prisma.admin.findUnique({
      where: {
        id: admin.id,
      },
      select: {
        incomingRequests: true,
      },
    });
  }

  async approvePost(postID: string, admin: Admin) {
    await this.prisma.admin.update({
      where : {
        id : admin.id
      },
      data : {
        incomingRequests : {
          disconnect : {
            id : postID
          }
        }
      }
    });
    await this.prisma.post.update({
      where : {
        id : postID
      },
      data:{
        isApproved : true,
        adminId : admin.id
      }
    })
  }
}
