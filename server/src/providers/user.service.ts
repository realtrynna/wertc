import { Injectable } from "@nestjs/common";
import typia from "typia";
import argon2 from "argon2";

import { UserRepository } from "src/models/repositories/user.repository";
import { CreateUserDto } from "src/models/dtos/create-user-dto";
import type { UserType } from "src/types";
import type { ALREADY_EXISTS_EMAIL } from "src/types/errors";

@Injectable()
export class UserService {
    constructor(private readonly usersRepository: UserRepository) {}

    async createUser(
        createUserDto: CreateUserDto,
    ): Promise<UserType.UserMeta | ALREADY_EXISTS_EMAIL> {
        const existingEmail = await this.usersRepository.findOneByEmail(
            createUserDto.email,
        );

        if (existingEmail.length) {
            return typia.random<ALREADY_EXISTS_EMAIL>();
        }

        const hashedPassword = await argon2.hash(createUserDto.password);

        const newUser = await this.usersRepository.createUser(
            createUserDto,
            hashedPassword,
        );

        return newUser[0];
    }
}
