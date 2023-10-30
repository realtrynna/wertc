import { Module } from "@nestjs/common";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/providers/auth.service";
import { CustomConfigService } from "src/providers/custom-config.service";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [CustomConfigModule],
            inject: [CustomConfigService],
            useFactory: (
                customConfigService: CustomConfigService,
            ): JwtModuleOptions => {
                const { issuer, algorithm, expiresIn } =
                    customConfigService.getJwtConfig();

                const { privatePemKey, publicPemKey } =
                    customConfigService.g4etRSAKeyConfig();

                return {
                    privateKey: privatePemKey,
                    publicKey: publicPemKey,
                    signOptions: {
                        issuer,
                        algorithm,
                        expiresIn,
                    },
                };
            },
        }),
        PassportModule.register({ session: false }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
