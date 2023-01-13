
export const userTypeDef = `
    type User {
        user_id : String!
        email : String!
        password : String!
        first_name : String!
        last_name : String!
    }
    type AuthPayload {
        token: String
        user: User
      }
      
    type Mutation {
        createUser(email: String!, last_name: String!, password: String!, user_role: String!, first_name: String!): User!
        login(email: String!, password: String!): AuthPayload!
    }
   
`