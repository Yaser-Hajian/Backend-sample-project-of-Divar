import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('signin')
  signin() {
    return 'You signed in';
  }

  @Post('signup')
  signup() {
    return 'You signed up';
  }
}
