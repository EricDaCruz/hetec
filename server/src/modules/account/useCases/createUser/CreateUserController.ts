import { type Request, type Response } from "express";

class CreateUserController {
    handle(request: Request, response: Response): Response {
        const {} = request.body;

        return response.send();
    }
}

export { CreateUserController };
