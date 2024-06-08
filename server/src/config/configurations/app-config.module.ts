import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppConfigService } from "src/config/configurations/app-config.service";

@Module({
    imports: [ConfigModule],
    providers: [AppConfigService],
})
export class AppConfigModule {}
