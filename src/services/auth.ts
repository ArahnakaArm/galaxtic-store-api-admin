import { PrismaClient } from '@prisma/client'
import { FastifyRequest } from 'fastify'
import { JwtPayload, verify } from 'jsonwebtoken'

const APP_SECRET = process.env.JWT_SECRET as string

export async function authenticateUser(
    prisma: PrismaClient,
    request: FastifyRequest
) {
    try {
        const req = request as any
        const header = req.request.headers.get('authorization')
        if (header !== null) {
            const token = header.split(' ')[1]
            const tokenPayload = verify(token, APP_SECRET) as JwtPayload
            const userId = tokenPayload.userId 
            const user = await prisma.users.findUnique({ where: { user_id: userId} }) 
            return user
        } else {
            return null
        }
    }
    catch (e) {
        return null
    }


}