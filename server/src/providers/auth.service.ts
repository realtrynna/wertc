import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { eq } from "drizzle-orm";

import { UserService } from "src/providers/user.service";
import { DB_PROVIDER } from "src/config/constant";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        @Inject(DB_PROVIDER) private readonly db,
        @Inject("USERS") private readonly users,
    ) {}

    async validateUser() {
        const result = await this.db
            .select({
                field1: this.users.email,
                field2: this.users.gender,
            })
            .from(this.users)
            .where(eq(this.users.email, "realtrynna"));

        const token = this.jwtService.sign({
            name: "1",
        });

        console.log(token);
    }
}
