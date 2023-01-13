import type { GraphQLContext } from '../context'
import { createUuid } from '../services/common';
import { throwConflict, throwInvalid, throwUnauthen, throwNotFound ,throwInvalidPassword} from '../error/throwError';
import { postUserValidate } from '../validate/userValidate';
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import * as dotenv from 'dotenv' 
dotenv.config()

const APP_SECRET = process.env["JWT_SECRET"] as string

const getAllUser = async (context: GraphQLContext) => {
  if (context.currentUser == null) {
    throwUnauthen()
  }
  const users = await context.prisma.users.findMany()
  return users;
}

const getUserById = async (context: GraphQLContext, id: any) => {
  const user = await context.prisma.users.findUnique({
    where: {
      user_id: id,
    },
  })
  
  if(!user){
    throwNotFound();
  }

  return user;
}

export const createUser = async (context: GraphQLContext, body: any) => {
  const isValid = postUserValidate(body)
  if (!isValid) {
    throwInvalid()
  }
  const { email, password, user_role, first_name, last_name } = body
  const user = await context.prisma.users.findUnique({
    where: {
      email: email
    },
  })

  if (user) {
    throwConflict()
  }

  const createdUser = await context.prisma.users.create({
    data: {
      user_id: createUuid(),
      email: email,
      password: password,
      user_role: user_role,
      first_name: first_name,
      last_name: last_name,
      is_active: true,
    },
  })


  return createdUser;
}

export const getUserByMe = async (context: GraphQLContext) => {
  if (context.currentUser == null) {
    throwUnauthen()
  }
  const user = await context.prisma.users.findUnique({
    where: {
      user_id: context.currentUser ? context.currentUser.user_id : '' ,
    },
  })

  if(!user){
    throwNotFound();
  }

  return user;
}




export const loginUser = async (context: GraphQLContext, body: any) => {
    const isValid = postUserValidate(body)
    if(!isValid){
      throwInvalid()
    } 
  const { email, password } = body
  const user = await context.prisma.users.findUnique({
    where: {
      email: email
    },
  })

  if (!user) {
    throwNotFound()
  }

  const valid = await compare(password, user!.password)
  if (!valid) {
    throwInvalidPassword()
  }


  const token = sign({ userId: user!.user_id }, APP_SECRET)

return { token, user }
}

export { getAllUser, getUserById } 