import { type Response, type Request } from "express";
import { container } from "tsyringe";

import { GetUserByUsernameUseCase } from "./GetUserByUsernameUseCase";

class GetUserByUsernameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const getUserByUsernameUseCase = container.resolve(
            GetUserByUsernameUseCase,
        );

        const user = await getUserByUsernameUseCase.execute(username);

        return response.status(201).json(user);
    }
}

export { GetUserByUsernameController };
