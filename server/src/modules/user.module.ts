import { Module } from "@nestjs/common";

import { DbModule } from "src/modules/db.module";
import { UserService } from "src/providers/user.service";

@Module({
    imports: [DbModule],
    controllers: [],
    providers: [UserService],
})
export class UserModule {}
