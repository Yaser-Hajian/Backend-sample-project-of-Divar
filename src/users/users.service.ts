import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getCarPosts(user: User) {
    const carPosts = await this.prisma.carPost.findMany({
      where: {
        post: {
          userID: user.id,
        },
      },
    });
    return carPosts;
  }

  async getHousePosts(user: User) {
    const housePosts = await this.prisma.housePost.findMany({
      where: {
        post: {
          userID: user.id,
        },
      },
    });
    return housePosts;
  }

  async getFurniturePosts(user: User) {
    const furniturePosts = await this.prisma.furniturePost.findMany({
      where: {
        post: {
          userID: user.id,
        },
      },
    });
    return furniturePosts;
  }

  async getAllPosts(user: User) {
    const car = await this.getCarPosts(user);
    const furniture = await this.getFurniturePosts(user);
    const house = await this.getHousePosts(user)
    let posts = [...car , ...house , ...furniture]
    return posts;
  }
}
