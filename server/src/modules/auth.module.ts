import { Module } from "@nestjs/common";

import { AuthController } from "src/controllers";
import { AuthService } from "src/providers";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
