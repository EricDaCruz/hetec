import { AppError } from "../../../errors/AppError";
import { type ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { type IUsersRepository } from "../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const userEmailAlreadyExists = await this.usersRepository.findByEmail(
            data.email,
        );

        const userUsernameAlreadyExists =
            await this.usersRepository.findByUsername(data.username);

        if (userEmailAlreadyExists || userUsernameAlreadyExists) {
            throw new AppError("User already exists");
        }

        await this.usersRepository.create(data);
    }
}

export { CreateUserUseCase };
