import prismaClient from "../prisma"

class deleteUserServices {
    async execute(){
        const users = await prismaClient.admin.deleteMany()
        return users
    }
}

export {deleteUserServices}