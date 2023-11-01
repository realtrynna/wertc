import { Module } from "@nestjs/common";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { CustomConfigService } from "src/providers/custom-config.service";
import { DB_PROVIDER } from "src/config/constant";
import * as users from "src/models/schemas/users";

@Module({
    imports: [CustomConfigModule],
    providers: [
        {
            provide: DB_PROVIDER,
            inject: [CustomConfigService],
            useFactory: async (customConfigService: CustomConfigService) => {
                const dbConfig = customConfigService.getDatabaseConfig();

                const pool = new Pool(dbConfig);

                return await drizzle(pool, {
                    logger: true,
                    schema: {
                        ...users,
                    },
                });
            },
        },
    ],
    exports: [DB_PROVIDER],
})
export class DbModule {}
