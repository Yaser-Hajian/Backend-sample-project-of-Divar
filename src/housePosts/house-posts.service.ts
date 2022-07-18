import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHousePostsDto } from './dto/create-house-post.dto';
@Injectable()
export class HousePostsService {
  constructor(private prisma: PrismaService) {}

  async createHousePost(dto : CreateHousePostsDto , user : User) {
    const housePost = await this.prisma.post.create({
        data: {
          title: dto.title,
          city: dto.city,
          Description: dto.description,
          pictures: dto.pictures,
          price: dto.price,
          tags: dto.tags,
          housePost: {
            create: {
              area : dto.area,
              hasElevator : dto.hasElevator,
              hasParking : dto.hasParking,
              numberOfFloor : dto.numberOfFloor,
              numberOfRooms : dto.numberOfRooms,
              numberOfTotalFloors : dto.numberOfTotalFloors,
              yearOfBuild : dto.yearOfBuild,
              pricePerMeter : dto.pricePerMeter
            },
          },
          userID : user.id ,
        },
      });
      const updatedAdmin = await this.prisma.admin.update({
        where : {
          username : 'admin1'
        },
        data : {
          incomingRequests : {
            connect : {
              id : housePost.id
            }
          }
        }
    
      })
      return "house post sent to admin!"  
  }
}
