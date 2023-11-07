import { Controller } from "@nestjs/common";
import { TypedBody, TypedRoute } from "@nestia/core";

import { AuthService } from "src/providers/auth.service";
import { UserService } from "src/providers/user.service";
import { CreateUserDto } from "src/models/dtos/create-user-dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @TypedRoute.Post("create")
    async createUser(@TypedBody() createUserDto: CreateUserDto) {
        // const result = await this.userService.createUser(createUserDto);
        const result = await this.authService.validateUser();

        return "hello";
    }
}
