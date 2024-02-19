import { AppError } from "../../src/errors/AppError";
import { UsersRepositoryInMemory } from "../../src/modules/account/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../../src/modules/account/useCases/createUserUseCase/CreateUserUseCase";
import { GetUserByIdUseCase } from "../../src/modules/account/useCases/getUserById/GetUserByIdUseCase";

let getUserByIdUseCase: GetUserByIdUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Get User by id", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
        getUserByIdUseCase = new GetUserByIdUseCase(usersRepositoryInMemory);
    });

    it("should be able return user by id", async () => {
        const data = {
            name: "Eric",
            email: "eric@gmail.com",
            phone: "00000000000",
            username: "cruz",
            password: "123456",
        };

        await createUserUseCase.execute(data);

        const user = await usersRepositoryInMemory.findByEmail(data.email);

        const userFoundById = await getUserByIdUseCase.execute(user.id);

        expect(userFoundById).toEqual(user);
    });

    it("should not be able return user whose id not exists", async () => {
        void expect(async () => {
            await getUserByIdUseCase.execute("0");
        }).rejects.toBeInstanceOf(AppError);
    });
});
