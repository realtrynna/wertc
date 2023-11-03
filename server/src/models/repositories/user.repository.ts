import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    constructor() {}

    async findUser() {
        return "user list";
    }
}
