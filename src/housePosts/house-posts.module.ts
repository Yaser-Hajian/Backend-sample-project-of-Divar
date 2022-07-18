import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HousePostsController } from './house-posts.controller';
import { HousePostsService } from './house-posts.service';

@Module({
  imports: [PrismaModule],
  controllers: [HousePostsController],
  providers: [HousePostsService],
})
export class HousePostsModule {}
