import { getAllCategory} from '../controllers/categoryController';
import type { GraphQLContext } from '../context'
import { throwUnauthen } from '../error/throwError';


export const categoryResolver = {
  Query: {
    categories: async (parent: unknown, args: {}, context: GraphQLContext) => {
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const cateRes = await getAllCategory(context)
      return cateRes
    },

  },
  Mutation: {
  }
}