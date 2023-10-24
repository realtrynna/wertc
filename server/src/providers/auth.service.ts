import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async validateUser() {
        const token = this.jwtService.sign({ id: 1 });

        return token;
    }
}
