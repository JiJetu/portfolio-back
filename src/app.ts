import path from "path";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import cookieParser from "cookie-parser";

const app: Application = express();

// parsers
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://ji-jetus-protfolio.vercel.app",
    ],
    credentials: true,
  })
);

// calling all routes
app.use("/api", router);

app.use(express.static(path.join(__dirname, "../public")));
//  testing route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handling
app.use(globalErrorhandler);

// not found
app.use(notFound);

export default app;
