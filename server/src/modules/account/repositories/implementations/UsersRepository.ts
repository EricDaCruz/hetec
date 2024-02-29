import { prisma } from "../../../../../prisma/db";
import { type ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { type User } from "../../models/User";
import { type IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async create({
        email,
        name,
        username,
        password,
        phone,
    }: ICreateUserDTO): Promise<void> {
        await prisma.user.create({
            data: {
                email,
                password,
                phone,
                name,
                username,
            },
        });
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                username,
            },
        });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                id,
            },
        });

        return user;
    }

    async update(data: IUpdateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id,
            },
        });
    }
}

export { UsersRepository };
