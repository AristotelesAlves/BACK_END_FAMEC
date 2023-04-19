import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';


class AuthenticateUserController {
  async handle(request: Request, response: Response) {

    const { nome, password } = request.body;

    const services = new AuthenticateUserService();

    try{
      const result = await services.execute({nome, password})
        return response.json(result);
    } catch(err) {
        return response.json(err.message)
    }

  }
}

export { AuthenticateUserController };