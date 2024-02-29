import { type Request, type Response } from "express";
import { container } from "tsyringe";

import { type IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { UpdateUserUseCase } from "./UpdateUserUsecase";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data: IUpdateUserDTO = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        await updateUserUseCase.execute(data);

        return response.status(201).send();
    }
}

export { UpdateUserController };
