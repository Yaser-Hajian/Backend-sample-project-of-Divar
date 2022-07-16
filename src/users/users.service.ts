import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getCarPosts(user: User) {
    const carPosts = await this.prisma.post.findMany({
      include : {
        carPost : true
      },
      where : {
        userID : user.id
      }
    });
    return carPosts;
  }

  async getHousePosts(user: User) {
    const housePosts = await this.prisma.post.findMany({
        include : {
          housePost : true
        },
        where : {
          userID : user.id
        }
      });
    return housePosts;
  }

  async getFurniturePosts(user: User) {
    const furniturePosts = await this.prisma.post.findMany({
        include : {
          furniturePost : true
        },
        where : {
          userID : user.id
        }
      });
    return furniturePosts;
  }

  async getAllPosts(user: User) {
    const allPosts = await this.prisma.post.findMany({
        include : {
            carPost:true,
            housePost:true,
            furniturePost:true,
        },
        where : {
            userID : user.id
          }
    })
    return allPosts;
  }
}
