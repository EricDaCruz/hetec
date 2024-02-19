import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { type IUsersRepository } from "../../repositories/IUsersRepository";

class UpdateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(data: IUpdateUserDTO): Promise<void> {
        const user = await this.usersRepository.findById(data.id);

        if (!user) {
            throw new Error("User not found");
        }

        await this.usersRepository.update(data);
    }
}

export { UpdateUserUseCase };
