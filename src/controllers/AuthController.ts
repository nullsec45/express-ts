import {Request, Response} from "express";

let data:any[]=[
    {id:1, name:"Rama"},
    {id:2, name:"Fajar"},
    {id:3, name:"Fadhillah"}
]


class AuthController {
    register(req: Request, res: Response): Response {
        return res.send(data);
    }

    login(req: Request, res: Response): Response {
        const {id, name}=req.body;

        data.push({id, name});

        return res.send({
            message:"Created Success",
            data
        });
    }
}

export default new AuthController();