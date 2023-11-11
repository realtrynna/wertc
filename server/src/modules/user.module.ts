import { Module } from "@nestjs/common";

import { UserService } from "src/providers/user.service";
import { DrizzleModule } from "src/modules/drizzle.module";
import * as usersSchema from "src/models/schemas/users";
import { users } from "src/models/schemas/users";

@Module({
    imports: [
        DrizzleModule.forDrizzleRepository(usersSchema),
    ],
    controllers: [],
    providers: [
        UserService,
        {
            provide: "USERS",
            useValue: users,
        }
    ],
})
export class UserModule {}
