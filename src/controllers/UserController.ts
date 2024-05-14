import {Request, Response} from "express";
import IController from "./ControllerInterface";

let data:any[]=[
    {id:1, name:"Rama"},
    {id:2, name:"Fajar"},
    {id:3, name:"Fadhillah"}
]


class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        const {id, name}=req.body;

        data.push({id, name});

        return res.send({
            message:"Created Success",
            data
        });
    }
    
    show(req: Request, res: Response): Response {
        const {id}=req.params;

        let person=data.find(item => item.id == id);

        if(!person){
         return res.send({
            message: `Person id ${id} not found`,
            data:[]
         });

        }

        return res.send(person);
    }
    
    update(req: Request, res: Response): Response {
        const {id}=req.params;
        const {name}=req.body;


        let person=data.find(item => item.id == id);

        if(!person){
         return res.send({
            message: `Person id ${id} not found`,
         });
        }

        person.name=name;
        
        return res.send({
            message:"Updated Success",
            person
        });
    }
    
    delete(req: Request, res: Response): Response {
        const {id}=req.params;

        let person=data.find(item => item.id == id);

        if(!person){
         return res.send({
            message: `Person id ${id} not found`,
         });
        }

        const user: {id:number,name:string}| undefined = data.find(user => user.id === Number(id))
        // person=data.filter(item => item.id !== id);
        data.splice(data.indexOf(user), 1)

        return res.send({
            message:"Deleted Success",
            data
        });
    }
    
}

export default new UserController();