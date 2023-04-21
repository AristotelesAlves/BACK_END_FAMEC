import prismaClient from "../prisma"
import * as EmailValidator from 'email-validator';
import nodemailer from 'nodemailer';

interface IcreateUser{
    cpf: string;
    dataNascimento: string;
    email: string;
    rg: string;
    telefone: string;
    nome: string;
}

class createUserServices{
    async execute({cpf, dataNascimento,email,rg,telefone,nome}: IcreateUser){
        const user = await prismaClient.user.findMany({
            where:{
                OR:[
                    {cpf},
                    {email},
                    {rg}
                ]
            }
                
        })
        
        if (user.length > 0){
            for(const users of user){
                if (users.email === email){
                    return 'já existe email'
                } else if (users.rg === rg){
                    return 'já existe rg'
                } else if (users.cpf){
                    return 'já existe cpf'
                }
            }
        }

        if (!EmailValidator.validate(email)) { 
            return 'Endereço de e-mail não é válido!'
          }
        
        const createUser = await prismaClient.user.create({
            data:{
                cpf,
                dataNascimento,
                email,
                rg,
                nome,
                telefone,
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
            subject:'enviando email',
            html: '<h1>Ola devs</h1> <p>este email foi enviado usando o nodemail</p>',
        }).then(() => console.log('mensagem enviado com sucesso')).catch((error)=> console.log(error))

        return createUser      
    }
}
export { createUserServices }