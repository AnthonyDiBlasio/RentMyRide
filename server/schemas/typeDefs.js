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

  type Car {
    carId: String!
    carType: String!
    carMake: String!
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
    users: [User]
    user(_id: String!): User
    cars: [Car]
    booking: [Booking]
  }

  type TokenUser {
    token: String
    user: User
  }

  type Mutation {
    createUser(first_name: String!, last_name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): TokenUser
    createCar(carType: String!, carMake: String!, carModel: String!, carYear: Int!, color: String, price: Int!, isAvailable: Boolean!, locationAvail: String, ownedBy: String): Car
  }
`;

module.exports = typeDefs;
