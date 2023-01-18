import { makeExecutableSchema } from '@graphql-tools/schema'
import {mainTypeDef} from './typedefs/mainTypeDef';
import {userTypeDef} from './typedefs/userTypeDef';
import {cateTypeDef} from './typedefs/cateTypeDef';
import {userResolver} from './resolvers/userResolver';
import {categoryResolver} from './resolvers/categoryResolver';


export const schema = makeExecutableSchema({
  resolvers: [userResolver , categoryResolver],
  typeDefs: [mainTypeDef, userTypeDef , cateTypeDef],
})