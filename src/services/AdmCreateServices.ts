import prismaClient from "../prisma"
import * as EmailValidator from 'email-validator';
import nodemailer from 'nodemailer';

interface IcreateUser{
    nome: string;
    senha: string;
}

class AdmCreateServices {
    async execute({nome,senha}: IcreateUser){
        const user = await prismaClient.admin.create({
            data:{
                nome:nome,
                senha:senha
            }    
        })
        return {user}
    }
}
export {AdmCreateServices}
