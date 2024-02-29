import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { type IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private readonly usersRepository: IUsersRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User not found");
        }

        await this.usersRepository.delete(id);
    }
}

export { DeleteUserUseCase };
