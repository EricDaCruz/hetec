import express, {
    type NextFunction,
    type Request,
    type Response,
} from "express";

import "express-async-errors";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";

const app = express();

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    },
);

app.use(routes);

app.get("/", (_, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333, () => {
    console.log("🚀 Server running on http://localhost:3333");
});
