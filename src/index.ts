import express, {Application, Request, Response} from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

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

        this.app.route("/users").post((req: Request, res:Response) => {
            // res.set("Content-Type", "application/json");
            res.setHeader("Content-Type", "text/html");
            res.send(req.body);
            console.log(req.body);
        });
    }
}

const port: number=8080;
const app=new App().app;


app.listen(port, () => {
    console.log(`Aplikasi ini berjalan di port ${port}`);
})
// const app=new express();
// const app: express.Application = express();

// app.use(express.json());

// app.route("/").get((req:any, res:any) => {
//     res.send("Halo, nama saya fajar");
// })
// app.route("/users").post((req: Request, res:Response) => {
//                 res.set("Content-Type", "application/json");
//                 res.setHeader("Content-Type", "text/html");
//                 res.send(req.body);
//                 console.log(req.body);
// });
// app.listen(8080);