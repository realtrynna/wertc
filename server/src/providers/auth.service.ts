import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import argon2 from "argon2";
import typia from "typia";

import { UserRepository } from "src/models/repositories/user.repository";
import type { UserType } from "src/types";
import type { MISMATCH_PASSWORD, NO_EXISTS_EMAIL } from "src/types/errors";
import type { LoginDto } from "src/models/dtos/login-dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersRepository: UserRepository,
    ) {}

    async createAccessToken(accessTokenPayload: UserType.DecodedToken) {
        return await this.jwtService.sign(accessTokenPayload);
    }

    async validateUser(loginDto: LoginDto) {
        const existingUser = await this.usersRepository.findOneByEmail(
            loginDto.email,
        );

        if (!existingUser.length) {
            return typia.random<NO_EXISTS_EMAIL>();
        }

        const { password } = existingUser[0];

        const passwordMatch = await argon2.verify(password, loginDto.password);

        if (!passwordMatch) {
            return typia.random<MISMATCH_PASSWORD>();
        }

        return existingUser[0];
    }

    async login(loginDto: LoginDto) {
        const isValidateUser = await this.validateUser(loginDto);

        if (isValidateUser) {
            return this.createAccessToken({
                id: isValidateUser.id,
                email: isValidateUser.email,
            });
        }
    }
}
