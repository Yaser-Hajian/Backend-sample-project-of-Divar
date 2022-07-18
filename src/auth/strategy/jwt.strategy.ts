import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config : ConfigService , private prisma : PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get("JWT_SECRET"),
    });
  }

  async validate(payload: {sub : string}) {
    const user = await this.prisma.user.findUnique({
      where : {
        id : payload.sub
      }
    })
    if (user) {
      delete user.hash;
      return user;
    }
    
    const admin = await this.prisma.admin.findUnique({
      where : {
        id : payload.sub
      }
    })
    if (admin) {
      delete admin.hash;
      return admin;
    }

  }
}