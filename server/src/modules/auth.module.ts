import { Module } from "@nestjs/common";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { DrizzleModule } from "src/modules/drizzle.module";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/providers/auth.service";
import { CustomConfigService } from "src/providers/custom-config.service";
import { UserService } from "src/providers/user.service";
import { UserRepository } from "src/models/repositories/user.repository";
import { users } from "src/models/schemas/users";

@Module({
    imports: [
        DrizzleModule.forDrizzleRepository(users),
        JwtModule.registerAsync({
            imports: [CustomConfigModule],
            inject: [CustomConfigService],
            useFactory: (
                customConfigService: CustomConfigService,
            ): JwtModuleOptions => {
                const jwtOptions = customConfigService.getJwtConfig();

                const result = customConfigService.getRSAKeyConfig();

                return {
                    privateKey: "privatePemKey.toString()",
                    publicKey: "publicPemKey.toString()",
                    signOptions: jwtOptions,
                };
            },
        }),
        PassportModule.register({ session: false }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, UserRepository],
})
export class AuthModule {}
