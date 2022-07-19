import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getCarPosts(user: User) {
    const carPosts = await this.prisma.post.findMany({
      include: {
        carPost: true,
      },
      where: {
        userID: user.id,
        isApproved: true,
        housePost: null,
        furniturePost: null,
      },
    });
    return carPosts;
  }

  async getHousePosts(user: User) {
    const housePosts = await this.prisma.post.findMany({
      include: {
        housePost: true,
      },
      where: {
        userID: user.id,
        isApproved: true,
        carPost: null,
        furniturePost: null,
      },
    });
    return housePosts;
  }

  async getFurniturePosts(user: User) {
    const furniturePosts = await this.prisma.post.findMany({
      include: {
        furniturePost: true,
      },
      where: {
        userID: user.id,
        isApproved: true,
        housePost: null,
        carPost: null,
      },
    });
    return furniturePosts;
  }

  async getAllPosts(user: User) {
    const allPosts = await this.prisma.post.findMany({
      include: {
        carPost: true,
        housePost: true,
        furniturePost: true,
      },
      where: {
        userID: user.id,
        isApproved: true,
      },
    });
    return allPosts;
  }

  async editProfile(dto: UpdateUserDto, user: User) {
    const saltRounds = 10;
    let myHash: string = undefined;
    if (dto.password) {
      myHash = await bcrypt.hash(dto.password, saltRounds);
    }

    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          hash: myHash,
          name: dto.name,
          username: dto.username,
          phoneNumber: dto.phoneNumber,
          city: dto.city,
        },
      });
      return 'your profile updated!';
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
