import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
    .$connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Failed to connect to database ", err);
    });

export { prisma };
