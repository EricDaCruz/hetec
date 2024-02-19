import { type ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { type IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { type User } from "../models/User";

interface IUsersRepository {
    create: (data: ICreateUserDTO) => Promise<void>;
    findByEmail: (email: string) => Promise<User>;
    findByUsername: (username: string) => Promise<User>;
    findById: (id: string) => Promise<User>;
    update: (data: IUpdateUserDTO) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

export type { IUsersRepository };
