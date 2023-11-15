import { InferSelectModel } from "drizzle-orm";

import { users } from "src/models/schemas/users";

export interface ResponseForm<T> {
    code: number;
    message: string;
    data: T;
}

export type Try<T> = ResponseForm<T>;

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
    type UserMeta = Pick<
        InferSelectModel<typeof users>,
        "id" | "email" | "name" | "gender"
    >;
    interface DecodedToken
        extends Pick<InferSelectModel<typeof users>, "id" | "email"> {}
}

type test = number[];

function test(): Try<test> {
    return {
        code: 200,
        message: "success",
        data: [1],
    };
}
