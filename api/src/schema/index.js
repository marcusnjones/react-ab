const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Entry {
    _id: ID!
    _dateCreated: String!
    dateUpdated: String
    firstName: String!
    lastName: String!
    email: String
    phone: String!
    address: String
    city: String
    state: String
    zip: String
  }
  input EntryInput {
    _dateCreated: String!
    firstName: String!
    lastName: String!
    email: String
    phone: String!
    address: String
    city: String
    state: String
    zip: String
  }
  type RootQuery {
    entries: [Entry!]!
  }
  type RootMutation {
    createEntry(entryInput: EntryInput): Entry
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
