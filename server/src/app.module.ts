import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule, DbModule, CustomConfigModule } from "src/modules";
import yamlConfig from "src/config/env/yaml.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [yamlConfig],
        }),
        AuthModule,
        DbModule,
        CustomConfigModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
