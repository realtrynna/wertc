import { readFileSync } from "fs";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

/**
 * @todo
 * yaml에 작성된 환경 변수를 별도의 타입으로 만들기
 */
@Injectable()
export class CustomConfigService {
    constructor(private readonly configService: ConfigService) {}
    g4etRSAKeyConfig() {
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
        const { issuer, algorithm, expiresIn } = this.configService.get("jwt");

        return {
            issuer,
            algorithm,
            expiresIn,
        };
    }

    getDatabaseConfig() {
        const { postgres } = this.configService.get("database");

        return postgres;
    }
}
