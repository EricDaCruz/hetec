import { AppError } from "../../src/errors/AppError";
import { UsersRepositoryInMemory } from "../../src/modules/account/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../../src/modules/account/useCases/createUserUseCase/CreateUserUseCase";
import { DeleteUserUseCase } from "../../src/modules/account/useCases/deleteUserUseCase/DeleteUserUseCase";

let deleteUserUseCase: DeleteUserUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Delete User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
        deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to delete a user", async () => {
        const data = {
            name: "Eric",
            email: "eric@gmail.com",
            phone: "00000000000",
            username: "cruz",
            password: "123456",
        };

        await createUserUseCase.execute(data);

        const user = await usersRepositoryInMemory.findByEmail(data.email);

        await deleteUserUseCase.execute(user.id);

        const userDeleted = await usersRepositoryInMemory.findByEmail(
            data.email,
        );

        expect(userDeleted).toBe(undefined);
    });

    it("should not be able to delete a user whose id not exists", () => {
        void expect(async () => {
            await deleteUserUseCase.execute("0");
        }).rejects.toBeInstanceOf(AppError);
    });
});
