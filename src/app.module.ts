import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CarPostsModule } from './carPosts/car-posts.module';
import { AdminsModule } from './admins/admins.module';
import { HousePostsModule } from './housePosts/house-posts.module';
import { PostsModule } from './posts/posts.module';
import { FurniturePostsModule } from './furniturePosts/furniture-posts.module';

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
