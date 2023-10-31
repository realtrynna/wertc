import { Module } from "@nestjs/common";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/providers/auth.service";
import { CustomConfigService } from "src/providers/custom-config.service";
import { UserService } from "src/providers/user.service";

import { DrizzleModule } from "src/modules/drizzle.module";
import { BaseRepository } from "src/models/repositories/base.repository";

@Module({
    imports: [
        DrizzleModule.forDrizzleRepository(BaseRepository),
        JwtModule.registerAsync({
            imports: [CustomConfigModule],
            inject: [CustomConfigService],
            useFactory: (
                customConfigService: CustomConfigService,
            ): JwtModuleOptions => {
                const jwtOptions = customConfigService.getJwtConfig();

                const { privatePemKey, publicPemKey } =
                    customConfigService.getRSAKeyConfig();

                return {
                    privateKey: privatePemKey,
                    publicKey: publicPemKey,
                    signOptions: jwtOptions,
                };
            },
        }),
        PassportModule.register({ session: false }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService],
})
export class AuthModule {}
