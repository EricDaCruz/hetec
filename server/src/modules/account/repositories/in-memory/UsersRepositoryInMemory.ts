import { type ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../models/User";
import { type IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create(data: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            ...data,
            created_at: new Date(),
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = this.users.find((user) => user.username === username);
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }

    async update(data: IUpdateUserDTO): Promise<void> {
        const user = this.users.find((user) => user.id === data.id);

        Object.assign(user, data);
    }
}

export { UsersRepositoryInMemory };
