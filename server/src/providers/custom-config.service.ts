import { access, constants, readFile } from "node:fs/promises";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { rsaPemKeyFolderSavePath } from "src/config/constant";
import { rsaKeyGenerator } from "src/utils";
import { EnvType } from "src/types";

@Injectable()
export class CustomConfigService {
    constructor(private readonly configService: ConfigService) {}
    async getRSAKeyConfig(): Promise<EnvType.RsaPemKey | undefined> {
        const privatePemKeyFileSavePath =
            rsaPemKeyFolderSavePath + "private.pem";
        const publicPemKeyFileSavePath = rsaPemKeyFolderSavePath + "public.pem";

        try {
            await access(
                privatePemKeyFileSavePath,
                constants.R_OK | constants.W_OK,
            );

            const privatePemKey = await readFile(
                privatePemKeyFileSavePath,
                "utf-8",
            );
            const publicPemKey = await readFile(
                publicPemKeyFileSavePath,
                "utf-8",
            );

            return {
                privatePemKey,
                publicPemKey,
            };
        } catch (err) {
            rsaKeyGenerator();
        }
    }

    getJwtConfig(): EnvType.Jwt | undefined {
        return this.configService.get("jwt");
    }

    getDatabaseConfig(): EnvType.Database | undefined {
        return this.configService.get("database");
    }
}
