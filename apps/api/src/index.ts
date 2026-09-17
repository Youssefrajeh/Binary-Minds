import cors from "cors";
import express from "express";
import { healthRouter } from "./routes/health.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/health", healthRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`CampusHub API listening on :${port}`);
});
