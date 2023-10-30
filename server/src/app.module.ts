import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DbModule } from "src/modules/db.module";
import { AuthModule } from "src/modules/auth.module";
import { CustomConfigModule } from "src/modules/custom-config.module";
import yamlConfig from "src/config/env/yaml.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [yamlConfig],
        }),
        AuthModule,
        DbModule,
        CustomConfigModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
