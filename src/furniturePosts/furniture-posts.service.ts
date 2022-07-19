import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFurniturePostsDto } from "./dto/create-furniture-post.dto";
@Injectable()
export class FurniturePostsService {
    constructor(private prisma : PrismaService){}
    async createFurniturePost(dto : CreateFurniturePostsDto , user : User){
        const post = await this.prisma.post.create({
            data: {
              title: dto.title,
              city: dto.city,
              Description: dto.description,
              pictures: dto.pictures,
              price: dto.price,
              tags: dto.tags,
              furniturePost: {
                create: {
                  brand : dto.brand,
                  condition : dto.condition
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
                  id : post.id
                }
              }
            }
        
          })
          return "furniture post sent to admin!"

    }
}