import { AppError } from "../../../../errors/AppError";
import { type User } from "../../models/User";
import { type IUsersRepository } from "../../repositories/IUsersRepository";

class GetUserByIdUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(id: string): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User does not exists");
        }

        return user;
    }
}

export { GetUserByIdUseCase };
