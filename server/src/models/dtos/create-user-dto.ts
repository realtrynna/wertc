import { tags } from "typia";

export interface CreateUserDto {
    email: string & tags.Format<"email">;
    name: string & tags.MinLength<2> & tags.MaxLength<6>;
    gender: "남자" | "여자";
    password: string & tags.MinLength<6> & tags.MaxLength<20>;
}
