import { Router } from "express";

import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/account/useCases/deleteUser/DeleteUserController";

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };
