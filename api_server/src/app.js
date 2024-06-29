import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import tempRouter from "./routes/temp.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes

app.use("/", tempRouter);

// Routes

export { app };
