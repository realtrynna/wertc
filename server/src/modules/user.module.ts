import { Module } from "@nestjs/common";

import { UserService } from "src/providers/user.service";
import { DrizzleModule } from "src/modules/drizzle.module";
import * as usersSchema from "src/models/schemas/users";
import { users } from "src/models/schemas/users";
import { SCHEMA_TOKEN_LIST } from "src/config/constant";
import { UserRepository } from "src/models/repositories/user.repository";

@Module({
    imports: [DrizzleModule.forDrizzleRepository(usersSchema)],
    controllers: [],
    providers: [
        UserRepository,
        UserService,
        {
            provide: SCHEMA_TOKEN_LIST["users"],
            useValue: users,
        },
    ],
    exports: [UserRepository],
})
export class UserModule {}
