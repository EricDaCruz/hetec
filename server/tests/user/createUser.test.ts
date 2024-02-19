import { AppError } from "../../src/errors/AppError";
import { UsersRepositoryInMemory } from "../../src/modules/account/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../../src/modules/account/useCases/createUserUseCase/CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: "Eric",
            email: "eric@gmail.com",
            phone: "00000000000",
            username: "cruz",
            password: "123456",
        };

        await createUserUseCase.execute(user);

        const userCreated = await usersRepositoryInMemory.findByEmail(
            user.email,
        );

        expect(userCreated).toHaveProperty("id");
    });

    it("should not be able to create a new user with email exists", async () => {
        void expect(async () => {
            const user = {
                name: "Eric",
                email: "eric@gmail.com",
                phone: "00000000000",
                username: "cruz",
                password: "123456",
            };

            await createUserUseCase.execute(user);
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a new user with username exists", async () => {
        void expect(async () => {
            const user = {
                name: "Eric",
                email: "eric@gmail.com",
                phone: "00000000000",
                username: "cruz",
                password: "123456",
            };

            await createUserUseCase.execute(user);
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });
});
