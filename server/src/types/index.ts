import { InferSelectModel } from "drizzle-orm";

import { users } from "src/models/schemas/users";

export declare namespace UserType {
    type UserMeta = InferSelectModel<typeof users>;
}
