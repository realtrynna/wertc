// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace AppEnv {
    type ExecutionEnv = "DEVELOPMENT" | "STAGING" | "PRODUCTION";

    type Port = number;

    interface Database {
        host: string;
        port: number;
        database: string;
        schema: string;
        user: string;
        password: string;
    }
}
