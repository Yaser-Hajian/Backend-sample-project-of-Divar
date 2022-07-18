import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PostsService {
    constructor(private prisma : PrismaService){}

    async getAllPosts(){
        const allPosts = await this.prisma.post.findMany({
            include : {
                carPost:true,
                housePost:true,
                furniturePost:true,
            },
            where : {
                isApproved : true
              }
        })
        return allPosts;
    }

    async getCarPosts(){
        const carPosts = await this.prisma.post.findMany({
            include : {
              carPost : true
            },
            where : {
              isApproved : true,
              housePost : null,
              furniturePost : null
            }
          });
          return carPosts;
    }
    async getFurniturePosts(){
        const furniturePosts = await this.prisma.post.findMany({
            include : {
              furniturePost : true
            },
            where : {
              isApproved : true,
              housePost : null,
              carPost : null
            }
          });
        return furniturePosts;
    }
    async getHousePosts(){
        const housePosts = await this.prisma.post.findMany({
            include : {
              housePost : true
            },
            where : {
              isApproved : true,
              carPost : null,
              furniturePost : null
            }
          });
        return housePosts;
    }
}