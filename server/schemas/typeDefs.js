const { gql } = require('apollo-server-express');

// Orginal Booking Typedef:  Need to build scalar for the DATE type - https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

// removing original Booking until Scalar is created for testing purposes.  Test Booking implemented without DATE fields

// type Booking {
//   users: [User]
//   cars: [Car]
//   reserveDate: Date
//   returnDate: Date
//   totalBill: Int
//   amount: Int
//   billingDate: Date
//   lateFee: Int
//   message: String
//   bookingCreated: Date
//   pickUp: Boolean
//   address: String
// }

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

  type Car {
    carId: String!
    carType: String!
    CarMake: String!
    carModel: String!
    carYear: Int!
    color: String
    price: Int!
    isAvailable: Boolean!
    locationAvail: String
    userRented: [String]
    ownedBy: String
  }

  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    location: String
  }

  type Booking {
    users: [User]
    cars: [Car]
    totalBill: Int
    amount: Int
    lateFee: Int
    message: String
    pickUp: Boolean
    address: String
  }
  
  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    users: [User]
    user(_id: String!): User
    car: [Car]
    booking: [Booking]
  }

  type TokenUser {
    token: String
    user: User
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    createUser(first_name: String!, last_name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): TokenUser
  }
`;

module.exports = typeDefs;
