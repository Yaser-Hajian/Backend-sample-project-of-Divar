import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [AdminsService],
  controllers: [AdminsController],
})
export class AdminsModule {}
