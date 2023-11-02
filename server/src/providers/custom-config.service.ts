import fs from "fs";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { rsaPemKeySaveFolderPath } from "src/config/constant";
import { rsaKeyGenerator } from "src/utils/rsa-key-generator";

@Injectable()
export class CustomConfigService {
    constructor(private readonly configService: ConfigService) {}
    async getRSAKeyConfig() {
        fs.readFile(rsaPemKeySaveFolderPath + "private.pem", (err, data) => {
            if (err) {
                rsaKeyGenerator();
            } else {
                console.log("파일 이미 존재");
            }
        });
    }

    getJwtConfig() {
        return this.configService.get("jwt");
    }

    getDatabaseConfig() {
        return this.configService.get("database");
    }
}
