import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService : AuthService ,) {}

  @Post('signin')
  signin(@Body()signInDto : SignInDto) {
    return this.authService.signin(signInDto);
  }

  @Post('signup')
   signup(@Body()signupDto : SignUpDto) {
    return this.authService.signup(signupDto)
    
  }
}
