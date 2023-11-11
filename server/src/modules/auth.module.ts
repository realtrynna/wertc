import { Module } from "@nestjs/common";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { DrizzleModule } from "src/modules/drizzle.module";
import { AuthController } from "src/controllers/auth.controller";
import { AuthService } from "src/providers/auth.service";
import { CustomConfigService } from "src/providers/custom-config.service";
import { UserService } from "src/providers/user.service";
import * as usersSchema from "src/models/schemas/users";
import { users } from "src/models/schemas/users";

@Module({
    imports: [
        DrizzleModule.forDrizzleRepository(usersSchema),
        JwtModule.registerAsync({
            imports: [CustomConfigModule],
            inject: [CustomConfigService],
            useFactory: async (
                customConfigService: CustomConfigService,
            ): Promise<JwtModuleOptions> => {
                const jwtOptions = customConfigService.getJwtConfig();
                const pemKeyList = await customConfigService.getRSAKeyConfig();

                return {
                    privateKey: pemKeyList?.privatePemKey,
                    publicKey: pemKeyList?.publicPemKey,
                    signOptions: {
                        issuer: jwtOptions?.issuer,
                        algorithm: jwtOptions?.algorithm,
                        expiresIn: jwtOptions?.expiresIn,
                    },
                };
            },
        }),
        PassportModule.register({ session: false }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        UserService,
        {
            provide: "USERS",
            useValue: users,
        },
    ],
})
export class AuthModule {}
