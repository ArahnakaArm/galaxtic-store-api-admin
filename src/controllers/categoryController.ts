import type { GraphQLContext } from '../context'
import { createUuid } from '../services/common';

export const getAllCategory = async (context: GraphQLContext) => {
    const categories = await context.prisma.main_categories.findMany()
    return categories;
  }
  