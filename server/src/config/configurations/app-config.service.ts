import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AppEnv } from "src/types";

@Injectable()
export class AppConfigService {
    private readonly _node_env: AppEnv.ExecutionEnv =
        (process.env.NODE_ENV as AppEnv.ExecutionEnv) || undefined;

    constructor(private readonly configService: ConfigService) {}

    private getAppEnv() {
        return this._node_env;
    }

    common<T>(value): T {
        return this.configService.get(this.getAppEnv())[value];
    }

    getPort() {
        return this.common<AppEnv.Port>("port");
    }

    getDatabase() {
        return this.common<AppEnv.Database>("database");
    }
}
