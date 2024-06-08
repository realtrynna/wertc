import { Injectable } from "@nestjs/common";

import { AppConfigService } from "src/config/configurations/app-config.service";

@Injectable()
export class AuthService {
    constructor(private readonly appConfigService: AppConfigService) {}
}
