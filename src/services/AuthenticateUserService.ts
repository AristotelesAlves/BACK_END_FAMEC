import prismaClient from "../prisma";
import { sign } from "jsonwebtoken"

interface AuthenticateUserRequest {
    nome: string;
    password: string;
  }

class AuthenticateUserService {
    async execute({ nome, password }: AuthenticateUserRequest){

        const user = await prismaClient.admin.findUnique({
            where:{
                nome: nome
            }
        })

        if (!user) {
            return ('usuário não encontrado')
        }

        const passwordMatch = password == user.senha

        if (!passwordMatch) {
            return ('Senha incorreta')
        }

        const token = sign({
            user:{
                nome: user.nome,
                senha: user.senha,
                id: user.id
            }
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: "1d"
        }
        );

        return {token, user}
    }
    
}

export { AuthenticateUserService }