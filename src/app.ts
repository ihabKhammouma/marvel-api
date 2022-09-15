import express from "express";
import SuperTeamRouter from "./superTeam/route";
const app = express();

app.use(express.json());

app.use("/super-team", SuperTeamRouter);
export default app;
