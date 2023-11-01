import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { CustomConfigModule } from "src/modules/custom-config.module";
import { DB_PROVIDER } from "src/config/constant";
import { CustomConfigService } from "src/providers/custom-config.service";

export class DrizzleModule {
    static forDrizzleRepository(schema) {
        const providers: any = [];

        providers.push({
            provide: DB_PROVIDER,
            inject: [CustomConfigService],
            useFactory: async (customConfigService: CustomConfigService) => {
                const dbConfig = customConfigService.getDatabaseConfig();

                const pool = new Pool(dbConfig);

                return await drizzle(pool, {
                    logger: true,
                    schema: {
                        ...schema,
                    },
                });
            },
        });

        return {
            module: DrizzleModule,
            imports: [CustomConfigModule],
            exports: [DB_PROVIDER],
            providers,
        };
    }
}
