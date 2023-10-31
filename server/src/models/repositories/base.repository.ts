import { Inject, Injectable } from "@nestjs/common";

import { DB_PROVIDER } from "src/config/constant";

@Injectable()
export class BaseRepository {
    constructor(@Inject(DB_PROVIDER) private readonly db) {
        console.log("base repository", this.db);
    }

    async find() {
        return this.db;
    }
}
