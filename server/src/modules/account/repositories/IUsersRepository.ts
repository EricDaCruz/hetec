import { type ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { type User } from "../models/User";

interface IUsersRepository {
    create: (data: ICreateUserDTO) => Promise<void>;
    findByEmail: (email: string) => Promise<User>;
    findByUsername: (username: string) => Promise<User>;
}

export type { IUsersRepository };
