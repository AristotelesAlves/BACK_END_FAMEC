import { Request, Response } from "express";
import { deleteUserServices } from "../services/getAdmServices copy";


class deleteUserController{
    async handle(request: Request, response: Response){
        const service = new deleteUserServices();
        const result = await service.execute();
        return response.json(result);
    }
}

export {  deleteUserController }