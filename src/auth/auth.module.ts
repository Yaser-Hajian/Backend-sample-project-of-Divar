import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt.guard";
import { JwtStrategy } from "./strategy/jwt.strategy";
@Module({
    imports : [PrismaModule , JwtModule , ConfigModule],
    providers : [AuthService ,JwtAuthGuard , JwtStrategy],
    controllers : [AuthController]
})
export class AuthModule {

}