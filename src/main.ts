import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from './schema'
import { PrismaClient } from '@prisma/client'
import { createContext } from './context'
import * as dotenv from 'dotenv' 
dotenv.config()

const prisma = new PrismaClient()

const main = async () => {
 
  const yoga = createYoga({ schema, context: createContext })
  const server = createServer(yoga)

  
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })