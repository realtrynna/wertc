import { Controller } from "@nestjs/common";
import { TypedBody, TypedRoute } from "@nestia/core";

import { AuthService } from "src/providers/auth.service";
import { CreateUserDto } from "src/models/dtos/create-user-dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @TypedRoute.Post("create")
    async createUser(@TypedBody() createUserDto: CreateUserDto) {
        console.log(createUserDto);
    }
}
