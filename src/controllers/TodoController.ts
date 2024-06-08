import {Request, Response} from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController{
    index=async (req: Request, res: Response): Promise<Response> => {
        const service:TodoService=new TodoService(req);
        const todo=await service.getAll(); 
     
        return res.send({
            data:todo
        });
    }

    create=async (req: Request, res: Response): Promise<Response> => {
        const service:TodoService=new TodoService(req);
        const todo=await service.store(); 

        return res.send({
            data:todo,
            message:'Successfully created todo'
        });
    }
    
    show=async (req: Request, res: Response): Promise<Response> => {
        const service:TodoService=new TodoService(req);
        const todo=await service.getOne(); 

        return res.send({
            data:todo
        });
    }
    
    update=async (req: Request, res: Response): Promise<Response> => {
        const service:TodoService=new TodoService(req);
        const todo=await service.update(); 

        return res.send({
            data:todo,
            message:"Sucessfully updated todo"
        });
    }
    
    delete=async (req: Request, res: Response): Promise<Response> => {
        const service:TodoService=new TodoService(req);
        const todo=await service.delete(); 

        return res.send({
            message:"Successfully deleted todo"
        })
    }
    
}

export default new TodoController();