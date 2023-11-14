import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { DB_PROVIDER_TOKEN } from "src/config/constant";
import { CustomConfigService } from "src/providers/custom-config.service";
import { DrizzleLogger } from "src/loggers/drizzle.logger";

export class DrizzleModule {
    static forDrizzleRepository(schema) {
        const providers: any = [];

        providers.push({
            provide: DB_PROVIDER_TOKEN,
            inject: [CustomConfigService],
            useFactory: async (customConfigService: CustomConfigService) => {
                const dbConfig = customConfigService.getDatabaseConfig();

                if (!dbConfig) return;

                const pool = new Pool(dbConfig);

                return await drizzle(pool, {
                    logger: new DrizzleLogger(),
                    schema: {
                        ...schema,
                    },
                });
            },
        });

        return {
            module: DrizzleModule,
            imports: [CustomConfigModule],
            exports: [DB_PROVIDER_TOKEN],
            providers,
        };
    }
}
