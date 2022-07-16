import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarPostsController } from './car-posts.controller';
import { CarPostsService } from './car-posts.service';

@Module({
  imports: [PrismaService],
  controllers: [CarPostsController],
  providers: [CarPostsService],
})
export class CarPostsModule {}
