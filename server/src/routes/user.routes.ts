import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
    response.send("All users here");
});

export { userRoutes };
