import { getAllCategory } from '../controllers/categoryController';
import type { GraphQLContext } from '../context'
import { throwUnauthen } from '../error/throwError';
import { updateCategory } from '../controllers/categoryController';


export const categoryResolver = {
  Query: {
    categories: async (parent: unknown, args: {offset? : number , limit? : number}, context: GraphQLContext) => {
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const cateRes = await getAllCategory(context , args)
      return cateRes
    },

  },
  Mutation: {
    putCategory: async (parent: unknown, args: { main_category_id: string; main_category_name: string; is_active: boolean }, context: GraphQLContext) => {
      /*   const isValid = updateUserValidate(args)
        if (!isValid) {
          throwInvalid()
        } */
      if (context.currentUser == null) {
        throwUnauthen()
      }
      const updatedCate = await updateCategory(context, args);
      return updatedCate
    }
  }
}