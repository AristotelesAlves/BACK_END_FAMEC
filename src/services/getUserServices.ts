import prismaClient from "../prisma"

class getUserServices {
    async execute(){
        const users = await prismaClient.user.findMany()
        return users
    }
}

export {getUserServices}