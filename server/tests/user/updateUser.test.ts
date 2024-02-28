import { UsersRepositoryInMemory } from "../../src/modules/account/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../../src/modules/account/useCases/createUser/CreateUserUseCase";
import { UpdateUserUseCase } from "../../src/modules/account/useCases/updateUser/UpdateUserUsecase";

let updateUserUseCase: UpdateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Update User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        updateUserUseCase = new UpdateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able update user data", async () => {
        const data = {
            email: "test@gmail.com",
            username: "test",
            name: "Test1",
            phone: "0000",
            password: "1234",
        };

        await createUserUseCase.execute(data);

        const user = await usersRepositoryInMemory.findByEmail(data.email);

        const updatedData = {
            id: user.id,
            email: "eric@gmail.com",
        };

        await updateUserUseCase.execute(updatedData);

        const userUpdated = await usersRepositoryInMemory.findByEmail(
            updatedData.email,
        );

        expect(userUpdated.email).not.toEqual(data.email);
    });
});
