import prismaClient from "../prisma"
import * as EmailValidator from 'email-validator';
import nodemailer from 'nodemailer';
import {textEmail} from './textEmail'

interface IcreateUser{
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    dataNascimento: string;
    curso: string;
}

class createUserServices{
    async execute({cpf, dataNascimento,email,telefone,nome, curso}: IcreateUser){
        const user = await prismaClient.user.findMany({
            where:{
                OR:[
                    {cpf},
                    {email},
                ]
            }
        })
        
        if (user.length > 0){ // Verificando se o array esta vazio
            for(const users of user){ // Verificando se o usuario já cadastrou
                if (users.email === email){
                    return 'E-mail já utilizado'
                } else if (users.cpf){
                    return 'CPF já utilizado'
                }
            }
        }

        if (!EmailValidator.validate(email)) { 
            return 'Seu E-mail não é válido!'
          }
        
        // passou pelas camadas de verificação, cria o usuário no db
        const createUser = await prismaClient.user.create({
            data:{
                nome,
                email,
                telefone,
                cpf,
                dataNascimento,
                curso
            }
        })

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user:'arystotelys@gmail.com',
                pass:process.env.KEY_SECRET_EMAIL,
            }
        })

        transport.sendMail({
            from:'Aristoteles <arystotelys@gmail.com>',
            to:email,
            subject:'bem-vindo(a) à Faculdade X!',
            html: textEmail,
        }).then(() => console.log('mensagem enviado com sucesso')).catch((error)=> console.log(error))

        return createUser      
    }
}
export { createUserServices }