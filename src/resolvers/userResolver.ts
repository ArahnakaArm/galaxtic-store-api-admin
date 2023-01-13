import { getAllUser, getUserById , createUser ,getUserByMe ,loginUser } from '../controllers/userController';
import type { GraphQLContext } from '../context'

export const userResolver = {
    Query: {
      user: async (parent: unknown, args: { user_id: any }, context: GraphQLContext) => {
        const userRes = await getUserById(context,args.user_id) 
        return userRes
      },
      users:async (parent: unknown, args: {}, context: GraphQLContext) =>{
        const usersRes = await  getAllUser(context) 
        return usersRes
      },
      userByMe:async (parent: unknown, args: {}, context: GraphQLContext) =>{
        const userRes = await  getUserByMe(context) 
        return userRes
      }

    },
    Mutation: {
        createUser: async (parent: unknown, args: { email: string; password: string; user_role: string; first_name: string; last_name: string }, context: GraphQLContext) => {
          const newUser = await createUser(context , args );
          return newUser
        },
        login : async (parent: unknown, args: { email: string; password: string }, context: GraphQLContext) => {
          const newUser = await loginUser(context , args );
          return newUser
        }
    }
  }