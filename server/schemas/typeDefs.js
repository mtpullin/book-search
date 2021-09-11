const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: User
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
input savedBook {
    title: String
    bookId: String
    authors: [String]
    image: String
    description: String
    link: String
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
}

type Auth {
    token: ID!
    user: User
}
`

module.exports = typeDefs;