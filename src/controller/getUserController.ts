import { Request, Response } from "express";
import { getUserServices } from "../services/getUserServices";

class getUserController{
    async handle(request: Request, response: Response){
        const service = new getUserServices();
        const result = await service.execute();
        return response.json(result);
    }
}

export {  getUserController }