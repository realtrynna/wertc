import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { DB_TOKEN } from "src/config/constant";

@Module({
    providers: [
        {
            provide: DB_TOKEN,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const pool = new Pool({
                    host: configService.get("DB_HOST"),
                    user: configService.get("DB_USER"),
                    password: configService.get("DB_PASSWORD"),
                    database: configService.get("DB_DATABASE"),
                    port: configService.get("DB_PORT"),
                });

                return await drizzle(pool, { logger: true });
            },
        },
    ],
    exports: [DB_TOKEN],
})
export class DbModule {}
