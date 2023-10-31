import { readFileSync } from "fs";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

/**
 * @todo
 * yaml에 작성된 환경 변수를 별도의 타입 작성
 */
@Injectable()
export class CustomConfigService {
    constructor(private readonly configService: ConfigService) {}
    getRSAKeyConfig() {
        const privatePemKey = readFileSync(
            rsaPemKeySaveFolderPath + "private.pem",
            "utf8",
        ).toString();
        const publicPemKey = readFileSync(
            rsaPemKeySaveFolderPath + "public.pem",
            "utf8",
        ).toString();

        return {
            privatePemKey,
            publicPemKey,
        };
    }

    getJwtConfig() {
        return this.configService.get("jwt");
    }

    getDatabaseConfig() {
        return this.configService.get("database");
    }
}
