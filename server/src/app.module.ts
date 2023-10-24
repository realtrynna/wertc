import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule, DbModule } from "src/modules";
import yamlConfig from "src/config/env/yaml.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [yamlConfig],
        }),
        AuthModule,
        DbModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
