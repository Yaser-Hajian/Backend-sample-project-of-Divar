import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { debugPort } from 'process';
import { PrismaService } from 'src/prisma/prisma.service';
import { runInThisContext } from 'vm';
import { CreateCarPostsDto } from './dto/create-car-post.dto';

@Injectable()
export class CarPostsService {
  constructor(private prisma: PrismaService) {}
  async  create(dto: CreateCarPostsDto, user: User) {
    const post = await this.prisma.post.create({
      data: {
        title: dto.title,
        city: dto.city,
        Description: dto.description,
        pictures: dto.pictures,
        price: dto.price,
        tags: dto.tags,
        carPost: {
          create: {
            color: dto.color,
            model: dto.model,
            usage: dto.usage,
            gearbox: dto.gearBox,
            motorCondition: dto.motorCondition,
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
    return "car post sent to admin!"
    
  }
}
