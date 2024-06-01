import {Request, Response} from "express";
import Authenctication from "../utils/Authentication";
import { compare } from "bcrypt";
const db=require("../db/models/");

class AuthController {
    register=async (req: Request, res: Response): Promise<Response> => {
        let {username, password}=req.body;
        const hashedPassword:string=await Authenctication.passwordHash(password);

        await db.user.create({username, password:hashedPassword});

        return res.send("Registration Success");
    }

    login=async (req: Request, res: Response): Promise<Response> => {
            // cari data user by username
        let {username, password}=req.body;

        const user=await db.user.findOne({
            where:{username}
        });

        if(user){
            let compare= await Authenctication.passwordCompare(password, user.password);

            // check passwor

            if(compare){
                // generate token

                let token=Authenctication.generateToken(user.id, username);
                return res.send({
                    token
                });
            }

            return res.send("Auth Failed");
        }
        

        return res.send("user not found");
        
    }

    profile=(req:Request, res:Response) : Response => {
        return res.send("Ini adalah profile, anda sudah login :).");
    }
}

export default new AuthController();