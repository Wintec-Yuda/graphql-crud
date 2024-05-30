import db from "./db.js"

export const resolvers = {
  Query: {
    users() {
      return db.users
    },
    user(_, { id }) {
      return db.users.find(user => user.id === id)
    },
  },
  Mutation: {
    createUser(_, { name, whatsapp }) {
      const user = {
        id: db.users.length + 1,
        name,
        whatsapp
      }
      db.users.push(user)
      return user
    },
    updateUser(_, { id, name, whatsapp }) {
      const userUpdate = db.users.find(user => user.id === id)
      name && (userUpdate.name = name)
      whatsapp && (userUpdate.whatsapp = whatsapp)

      return userUpdate
    },
    deleteUser(_, { id }) {
      const userDelete = db.users.find(user => user.id === id)

      db.users = db.users.filter(user => user.id !== id)
      return userDelete
    }
  }
}