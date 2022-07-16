import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';

@Module({
  imports: [PrismaModule],
  providers: [AdminsService],
  controllers: [AdminsController],
})
export class AdminsModule {}
