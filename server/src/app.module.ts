import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import appConfiguration from "src/config/configurations/app-configuration";
import { AppConfigModule } from "src/config/configurations/app-config.module";
import { AuthModule } from "src/domains/auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [appConfiguration],
        }),
        AppConfigModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
