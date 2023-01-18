
export const mainTypeDef = `
  type Query {
    user(user_id: ID!): User
    users: [User!]
    userByMe : User

    categories : [Category!]
  }
`