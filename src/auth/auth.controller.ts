import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get("signin")
  signin() {}

  @Post("signup")
  signup() {}
}
