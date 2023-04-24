import { Request, Response } from 'express';
import { AdmCreateServices } from '../services/AdmCreateServices';

class AdmCreateController {
    async handle(request: Request, response: Response){
        const {nome, senha} = request.body
        const services = new AdmCreateServices();
        const result = await services.execute({nome,senha});
        console.log(result)
        return response.json(result)
    }
}

export {AdmCreateController}