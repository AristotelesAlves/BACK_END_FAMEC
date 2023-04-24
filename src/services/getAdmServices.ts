import prismaClient from "../prisma"

class getAdmServices {
    async execute(){
        const users = await prismaClient.admin.findMany()
        return users
    }
}

export {getAdmServices}