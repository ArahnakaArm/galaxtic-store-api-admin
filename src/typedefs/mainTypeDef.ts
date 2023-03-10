
export const mainTypeDef = `
  type Query {
    user(user_id: ID!): User
    users: [User!]
    userByMe : User

    categories(offset: Int,limit: Int,search : String) : CategoryResponse
  }
`