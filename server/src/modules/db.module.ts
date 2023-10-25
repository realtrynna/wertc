import { Module } from "@nestjs/common";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { CustomConfigModule } from "src/modules/custom-config.module"
import { CustomConfigService } from "src/providers";
import { DB_TOKEN } from "src/config/constant";

@Module({
    imports: [CustomConfigModule],
    providers: [
        {
            provide: DB_TOKEN,
            inject: [CustomConfigService],
            useFactory: async (customConfigService: CustomConfigService) => {
                const { host, user, password, database, port } =
                    customConfigService.getDatabaseConfig();

                const pool = new Pool({
                    host,
                    user,
                    password,
                    database,
                    port,
                });

                return await drizzle(pool, { logger: true });
            },
        },
    ],
    // exports: [DB_TOKEN],
})
export class DbModule {}
