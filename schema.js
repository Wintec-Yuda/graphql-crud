export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    whatsapp: String!
  }

  type Query {
    users: [User]
    user(id:ID): User
  }

  type Mutation {
    createUser(name: String!, whatsapp: String!): User
    updateUser(id: ID!, name: String, whatsapp: String): User
    deleteUser(id: ID!): User
  }
`