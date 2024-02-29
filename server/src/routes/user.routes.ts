import { Router } from "express";

import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/account/useCases/deleteUser/DeleteUserController";
import { GetUserByUsernameController } from "../modules/account/useCases/getUserByUsername/GetUserByUsernameController";
import { UpdateUserController } from "../modules/account/useCases/updateUser/UpdateUserController";

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const getUserByUsernameUseCase = new GetUserByUsernameController();

const userRoutes = Router();

userRoutes.get("/:username", getUserByUsernameUseCase.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);
userRoutes.put("/:id", updateUserController.handle);

export { userRoutes };
