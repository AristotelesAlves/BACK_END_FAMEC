import { Request, Response } from "express";
import { getAdmServices } from "../services/getAdmServices";

class getAdmController{
    async handle(request: Request, response: Response){
        const service = new getAdmServices();
        const result = await service.execute();
        return response.json(result);
    }
}

export {  getAdmController }