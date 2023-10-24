import { Controller } from "@nestjs/common";
import { TypedBody, TypedRoute } from "@nestia/core";

import { AuthService } from "src/providers";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @TypedRoute.Post("create")
    async createUser(@TypedBody() createUserDto) {
        console.log(this.authService.validateUser());

        console.log(createUserDto);
    }
}
