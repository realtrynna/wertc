import { Module } from "@nestjs/common";

import { UserService } from "src/providers/user.service";

@Module({
    imports: [],
    controllers: [],
    providers: [UserService],
})
export class UserModule {}
