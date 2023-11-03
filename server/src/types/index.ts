import { InferSelectModel } from "drizzle-orm";

import { users } from "src/models/schemas/users";

export declare namespace EnvType {
    interface Http {
        host: string;
        port: number;
    }

    interface Database {
        host: string;
        user: string;
        password: string;
        database: string;
        port: number;
    }

    interface Jwt {
        issuer: string;
        algorithm: "RS256";
        expiresIn: string;
    }

    interface RsaPemKey {
        privatePemKey: string;
        publicPemKey: string;
    }
}

export declare namespace UserType {
    type UserMeta = InferSelectModel<typeof users>;
}
