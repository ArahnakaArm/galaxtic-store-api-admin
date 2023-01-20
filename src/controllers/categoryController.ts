import { Prisma } from '@prisma/client';
import type { GraphQLContext } from '../context'
import { createUuid } from '../services/common';
import { throwNotFound, throwSystemError } from '../error/throwError';
import { DBErrorCode } from '../utils/enums/dbErrorCode';

export const getAllCategory = async (context: GraphQLContext, arg: any) => {
  let paginateOptions = {} as any
  if (arg.offset) paginateOptions.skip = arg.offset
  if (arg.limit) paginateOptions.take = arg.limit
  const categories = await context.prisma.main_categories.findMany({
    ...paginateOptions, orderBy: {
      order: 'asc'
    }
  })
  return categories;
}

export const updateCategory = async (context: GraphQLContext, body: any) => {
  const cateId = body.main_category_id || ''
  const updateData = body
  delete updateData.main_category_id
  updateData.updated_at = new Date()
  try {
    const updatedCate = await context.prisma.main_categories.update({
      where: {
        main_category_id: cateId
      },
      data: updateData
    })
    return updatedCate;
  }
  catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === DBErrorCode.DATA_NOT_FOUND
    ) {
      throwNotFound()
    }
    else {
      throwSystemError()
    }
  }





}
