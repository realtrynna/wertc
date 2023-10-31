import { DynamicModule } from "@nestjs/common";

import { DbModule } from "src/modules/db.module";
import { DRIZZLE_PROVIDER } from "src/config/constant";

export class DrizzleModule {
    static forDrizzleRepository(entity): DynamicModule {
        const provide = {
            provide: DRIZZLE_PROVIDER,
            useFactory: () => {
                return new entity("a");
            },
        };

        return {
            module: DrizzleModule,
            imports: [DbModule],
            providers: [provide],
            exports: [DRIZZLE_PROVIDER],
        };
    }
}
