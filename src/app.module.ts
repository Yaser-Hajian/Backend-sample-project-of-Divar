import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CarPostsModule } from './car-posts/car-posts.module';
import { AdminsModule } from './admins/admins.module';
import { HousePostsModule } from './house-posts/house-posts.module';
import { PostsModule } from './posts/posts.module';
import { FurniturePostsModule } from './furniture-posts/furniture-posts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    UsersModule,
    CarPostsModule,
    AdminsModule,
    HousePostsModule,
    PostsModule,
    FurniturePostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
