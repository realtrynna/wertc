import { Controller } from "@nestjs/common";
import { TypedBody, TypedRoute } from "@nestia/core";

import { AuthService } from "src/providers/auth.service";
import { UserService } from "src/providers/user.service";
import { CreateUserDto } from "src/models/dtos/create-user-dto";
import { LoginDto } from "src/models/dtos/login-dto";
import { UserType } from "src/types";
import { ALREADY_EXISTS_EMAIL } from "src/types/errors";

@Controller("auth")
// @UseInterceptors(ResponseFormInterceptor)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @TypedRoute.Post("create")
    async createUser(
        @TypedBody() createUserDto: CreateUserDto,
    ): Promise<UserType.UserMeta | ALREADY_EXISTS_EMAIL | undefined> {
        try {
            const result = await this.userService.createUser(createUserDto);

            console.log(result);

            /**
             * @todo
             * Service 에서 error 를 리턴할 경우 예외 처리
             */

            return result;
        } catch (err) {
            console.error(err);
        }
    }

    @TypedRoute.Post("login")
    async login(@TypedBody() loginDto: LoginDto) {
        try {
            const result = await this.authService.login(loginDto);

            return result;
        } catch (err) {
            console.error(err);
        }
    }
}
