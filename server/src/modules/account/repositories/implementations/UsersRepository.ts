import { type ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { type User } from "../../models/User";
import { type IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async create(data: ICreateUserDTO): Promise<void> {}

    async findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async findByUsername(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async update(data: IUpdateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UsersRepository };
