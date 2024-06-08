import { Module } from "@nestjs/common";

import { AppConfigModule } from "src/config/configurations/app-config.module";
import { AppConfigService } from "src/config/configurations/app-config.service";
import { AuthService } from "src/domains/auth/auth.service";

@Module({
    imports: [AppConfigModule],
    providers: [AuthService, AppConfigService],
})
export class AuthModule {}
