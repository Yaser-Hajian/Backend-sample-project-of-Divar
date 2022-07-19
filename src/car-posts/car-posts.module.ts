import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CarPostsController } from './car-posts.controller';
import { CarPostsService } from './car-posts.service';

@Module({
  imports: [PrismaModule],
  controllers: [CarPostsController],
  providers: [CarPostsService],
})
export class CarPostsModule {}
