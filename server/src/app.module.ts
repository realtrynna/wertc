import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/modules/auth.module";
import { CustomConfigModule } from "src/modules/custom-config.module";
import { UserModule } from "src/modules/user.module";
import yamlConfig from "src/config/env/yaml.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [yamlConfig],
        }),
        AuthModule,
        // DbModule,
        CustomConfigModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor() {}
}
