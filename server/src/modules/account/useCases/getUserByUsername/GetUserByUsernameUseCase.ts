import { inject, injectable } from "tsyringe";

import { type User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class GetUserByUsernameUseCase {
    constructor(
        @inject("UsersRepository")
        private readonly usersRepository: IUsersRepository,
    ) {}

    async execute(username: string): Promise<User> {
        const user = await this.usersRepository.findByUsername(username);

        return user;
    }
}

export { GetUserByUsernameUseCase };
