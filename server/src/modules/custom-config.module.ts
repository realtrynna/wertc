import { Module } from "@nestjs/common";

import { CustomConfigService } from "src/providers";

@Module({
    providers: [CustomConfigService],
    exports: [CustomConfigService],
})
export class CustomConfigModule {}
