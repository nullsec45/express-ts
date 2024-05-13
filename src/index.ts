import express, {Application, Request, Response} from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

// Routers
import UserRoutes from "./routers/UserRoutes";

class App{
    public app: Application;

    constructor(){
        this.app=express();
        this.plugins();
        this.routes();
    }

    private plugins(){
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(helmet());
    }
   
    protected routes(): void{
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("ini adalah route menggunakan TS");
        });

       this.app.use("/users", UserRoutes);
    }
}

const port: number=8080;
const app=new App().app;


app.listen(port, () => {
    console.log(`Aplikasi ini berjalan di port ${port}`);
});
