import { Request, Response } from 'express';
import { createUserServices } from '../services/createUserServices';

class createUserController {
    async handle(request: Request, response: Response){
        const {cpf,dataNascimento,email,rg,telefone,nome} = request.body
        const services = new createUserServices();
        const result = await services.execute({cpf,dataNascimento,email,rg,telefone,nome});
        console.log(result)
        return response.json(result)
    }
}

export {createUserController}