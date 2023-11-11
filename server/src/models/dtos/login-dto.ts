import { CreateUserDto } from "src/models/dtos/create-user-dto";

export interface LoginDto extends Pick<CreateUserDto, "email" | "password"> {};