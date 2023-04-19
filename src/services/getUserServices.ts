import prismaClient from "../prisma"

class getUserServices {
    async execute(){
        const messages = await prismaClient.admin.findMany({
        });
        return messages
    }
}

export {getUserServices}