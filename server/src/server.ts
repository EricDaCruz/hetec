import express from "express";

const app = express();

app.get("/", (_, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333, () => {
    console.log("🚀 Server running on http://localhost:3333");
});
