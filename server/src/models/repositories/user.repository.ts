import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    constructor() {
        console.log("user repository");
    }
}
