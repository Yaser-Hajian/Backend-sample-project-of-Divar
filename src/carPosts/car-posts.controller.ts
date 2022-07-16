import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@Controller('carPosts')
@UseGuards(JwtAuthGuard)
export class CarPostsController {
  @Post()
  create() {}
}
