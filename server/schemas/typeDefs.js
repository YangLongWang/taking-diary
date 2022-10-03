// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    diaryCount: Int
    savedDiaries: [Diary]
  }

  type Diary {
    _id: ID
    content: String
    date: Date
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveDiary(_id: String, content: String, date: Date): User
    removeDiary(_id: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
