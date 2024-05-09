"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
    };
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send("ini adalah route menggunakan TS");
        });
        this.app.route("/users").post(function (req, res) {
            // res.set("Content-Type", "application/json");
            res.setHeader("Content-Type", "text/html");
            res.send(req.body);
            console.log(req.body);
        });
    };
    return App;
}());
var port = 8080;
var app = new App().app;
app.listen(port, function () {
    console.log("Aplikasi ini berjalan di port ".concat(port));
});
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
