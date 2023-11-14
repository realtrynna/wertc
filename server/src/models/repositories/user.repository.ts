import { Inject, Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";

import { DB_PROVIDER_TOKEN, SCHEMA_TOKEN_LIST } from "src/config/constant";
import { CreateUserDto } from "src/models/dtos/create-user-dto";

@Injectable()
export class UserRepository {
    constructor(
        @Inject(DB_PROVIDER_TOKEN) private readonly db,
        @Inject(SCHEMA_TOKEN_LIST["users"]) private readonly users,
    ) {}

    async createUser(createUserDto: CreateUserDto, password: string) {
        const newUser = await this.db
            .insert(this.users)
            .values({
                ...createUserDto,
                password,
            })
            .returning();

        return newUser;
    }

    async findOneByEmail(email: string) {
        return await this.db
            .select()
            .from(this.users)
            .where(eq(this.users.email, email));
    }
}
