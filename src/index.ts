import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

// Routers
import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";
import TodoRoutes from "./routers/TodoRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  private plugins() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("ini adalah route menggunakan TS");
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
    this.app.use("/api/v1/todos", TodoRoutes);
  }
}

const port: number = 8090;
const app = new App().app;

app.listen(port, () => {
  console.log(`Aplikasi ini berjalan di port ${port}`);
});
