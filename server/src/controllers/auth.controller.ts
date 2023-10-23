import { Controller } from "@nestjs/common";
import { TypedRoute } from "@nestia/core";

import { AuthService } from "src/providers";
import type { UserType } from "src/types";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @TypedRoute.Post("create")
    async createUser(): Promise<UserType.UserMeta> {
        return {
            id: 1,
            email: "admin",
            gender: "남자",
        };
    }
}
