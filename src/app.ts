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
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ji-jetus-protfolio.vercel.app",
        "https://ji-jetus-portfolio.vercel.app",
      ];

      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app")
      ) {
        return callback(null, true);
      }

      return callback(null, true);
    },
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
