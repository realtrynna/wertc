import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "src/providers/user.service";
import { DRIZZLE_PROVIDER } from "src/config/constant";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        @Inject(DRIZZLE_PROVIDER) private readonly db,
    ) {}

    async validateUser() {
        console.log(this.db);
    }
}
