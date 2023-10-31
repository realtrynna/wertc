import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "src/models/dtos/create-user-dto";

@Injectable()
export class UserService {
    constructor() {}

    async createUser(createUserDto: CreateUserDto) {}

    async findOneByEmail(email: string) {}
}
