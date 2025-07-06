import express from "express";
import tokenRoute from "./routes/token";

const app = express();
app.use(express.json());
app.use("/api/token", tokenRoute);

export default app;
