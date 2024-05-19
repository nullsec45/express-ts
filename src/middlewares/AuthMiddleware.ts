import { Request, Response, NextFunction } from "express";

export const auth=(req:Request, res:Response, next:NextFunction):any => {
    console.log("Ini adalah middleware");
    let auth=false;

    if(auth){
        next();
    }

    return res.send("Unauthenticated");
}