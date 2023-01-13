import { PrismaClient, users } from '@prisma/client'
import { YogaInitialContext } from '@graphql-yoga/node'
import { authenticateUser } from './services/auth';
import { FastifyRequest } from 'fastify'

const prisma = new PrismaClient()

export type GraphQLContext = {
    prisma: PrismaClient
    currentUser: null | users
}

export async function createContext(request: FastifyRequest): Promise<GraphQLContext> {
    return { prisma, currentUser: await authenticateUser(prisma, request) }
}