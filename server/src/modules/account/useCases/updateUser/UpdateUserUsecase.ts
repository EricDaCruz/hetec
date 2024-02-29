import { inject, injectable } from "tsyringe";

import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { type IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private readonly usersRepository: IUsersRepository,
    ) {}

    async execute(data: IUpdateUserDTO): Promise<void> {
        const user = await this.usersRepository.findById(data.id);

        if (!user) {
            throw new Error("User not found");
        }

        await this.usersRepository.update(data);
    }
}

export { UpdateUserUseCase };
