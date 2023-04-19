import prismaClient from "../prisma"

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
        return createUser      
    }
}
export { createUserServices }