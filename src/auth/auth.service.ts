import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDto) {
    const saltRounds = 10;
    // await bcrypt.hash(dto.password, 10 , (error , hash)=>{
    //     myHash = hash;
    // });

    const myHash = await bcrypt.hash(dto.password, saltRounds);
    try {
      const user = await this.prisma.user.create({
        data: {
          hash: myHash,
          name: dto.name,
          username: dto.username,
          phoneNumber: dto.phoneNumber,
          city: dto.city,
        },
      });
      return this.getJwtToken(user.id);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      if (error instanceof PrismaClientValidationError) {
        console.log(error);

        throw new ForbiddenException('missing properties');
      }
      throw error;
    }
  }

  async getJwtToken(userId: string): Promise<{ access_token: string }> {
    const payload = { sub: userId };
    const secret = this.config.get('JWT_SECRET');
    return {
      access_token: await this.jwt.sign(payload, {
        expiresIn: '2m',
        secret,
      }),
    };
  }
}
