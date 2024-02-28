import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { type IUsersRepository } from "../../modules/account/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);
