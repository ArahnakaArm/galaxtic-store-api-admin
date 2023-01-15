import { getAllUser, getUserById, createUser, getUserByMe, loginUser,putUserByMe } from '../controllers/userController';
import type { GraphQLContext } from '../context'
import { throwInvalid, throwUnauthen } from '../error/throwError';
import { postUserValidate, loginValidate ,updateUserValidate } from '../validate/userValidate';

export const userResolver = {
  Query: {
    user: async (parent: unknown, args: { user_id: any }, context: GraphQLContext) => {
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const userRes = await getUserById(context, args.user_id)
      return userRes
    },
    users: async (parent: unknown, args: {}, context: GraphQLContext) => {
      const usersRes = await getAllUser(context)
      return usersRes
    },
    userByMe: async (parent: unknown, args: {}, context: GraphQLContext) => {
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const userRes = await getUserByMe(context)
      return userRes
    }

  },
  Mutation: {
    createUser: async (parent: unknown, args: { email: string; password: string; user_role: string; first_name: string; last_name: string }, context: GraphQLContext) => {
      const isValid = postUserValidate(args)
      if (!isValid) {
        throwInvalid()
      }
      const newUser = await createUser(context, args);
      return newUser
    },
    login: async (parent: unknown, args: { email: string; password: string }, context: GraphQLContext) => {
      const isValid = loginValidate(args)
      if (!isValid) {
        throwInvalid()
      }
      const newUser = await loginUser(context, args);
      return newUser
    },
    putUserByMe: async (parent: unknown, args: { first_name: string; last_name: string }, context: GraphQLContext) => {
      const isValid = updateUserValidate(args)
      if (!isValid) {
        throwInvalid()
      }
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const updatedUser = await putUserByMe(context, args);
      return updatedUser
    }
  }
}