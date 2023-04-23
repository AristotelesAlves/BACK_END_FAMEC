import prismaClient from "../prisma"

class getUserServices {
    async execute(){
        const mensagem = await prismaClient.user.findMany()
        return mensagem
    }
}

export {getUserServices}