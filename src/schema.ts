import { makeExecutableSchema } from '@graphql-tools/schema'
import {mainTypeDef} from './typedefs/mainTypeDef';
import {userTypeDef} from './typedefs/userTypeDef';
import {userResolver} from './resolvers/userResolver';


export const schema = makeExecutableSchema({
  resolvers: [userResolver],
  typeDefs: [mainTypeDef, userTypeDef],
})