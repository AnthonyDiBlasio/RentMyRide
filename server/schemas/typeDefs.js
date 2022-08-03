const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
  }
  
  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    userTest: [UserTest]
  }

  

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup

    createUserTest(first_name: String!, last_name: String!, email: String!, password: String!): UserTest
  }
`;

module.exports = typeDefs;
