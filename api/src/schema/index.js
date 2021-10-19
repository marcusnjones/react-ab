const {buildSchema} = require('graphql');

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
  input EntryCreateInput {
    firstName: String!
    lastName: String!
    email: String
    phone: String!
    address: String
    city: String
    state: String
    zip: String
  }
  input EntryUpdateInput {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    address: String
    city: String
    state: String
    zip: String
  }
  input EntryDeleteInput {
    _id: ID!
  }
  type RootQuery {
    entries: [Entry!]!
    entry(id: String!): Entry!
  }
  type RootMutation {
    createEntry(data: EntryCreateInput!): Entry
    updateEntry(data: EntryUpdateInput!): Entry
    deleteEntry(data: EntryDeleteInput!): Entry
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
