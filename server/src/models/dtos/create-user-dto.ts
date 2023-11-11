import { tags } from "typia";

import { TInsertUser } from "src/models/schemas/users";

export interface CreateUserDto extends TInsertUser {
    email: string & tags.Format<"email">;
    name: string & tags.MinLength<2> & tags.MaxLength<6>;
    gender: "남자" | "여자";
    password: string & tags.MinLength<6> & tags.MaxLength<20>;
}
