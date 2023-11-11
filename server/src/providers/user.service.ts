import {Inject, Injectable} from "@nestjs/common";
import { eq  } from "drizzle-orm";
import typia from "typia";
import argon2, {hash} from "argon2";

import { CreateUserDto } from "src/models/dtos/create-user-dto";
import { DB_PROVIDER } from "src/config/constant";
import type { ALREADY_EXISTS_EMAIL } from "src/types/errors";
import type { UserType } from "src/types";

@Injectable()
export class UserService {
    constructor(
        @Inject(DB_PROVIDER) private readonly db,
        @Inject("USERS") private readonly users
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserType.UserMeta | ALREADY_EXISTS_EMAIL> {
        const alreadyEmail = await this.findOneByEmail(createUserDto.email);

        if (alreadyEmail.length) {
            return typia.random<ALREADY_EXISTS_EMAIL>();
        }

        const hashedPassword = await argon2.hash(createUserDto.password);

        const newUser = await this.db.insert(this.users)
            .values({
                ...createUserDto,
                password: hashedPassword,
            })
            .returning();

        return newUser[0];
    }

    async findOneByEmail(email: string) {
        return await this.db
            .select()
            .from(this.users)
            .where(eq(this.users.email, email));
    }
}
