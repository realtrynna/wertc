import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule, DbModule } from "src/modules";
import AppConfig from "src/config/env/env.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [AppConfig],
        }),
        AuthModule,
        DbModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
