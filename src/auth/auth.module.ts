import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
@Module({
    imports : [PrismaModule , JwtModule , ConfigModule],
    providers : [AuthService],
    controllers : [AuthController]
})
export class AuthModule {

}