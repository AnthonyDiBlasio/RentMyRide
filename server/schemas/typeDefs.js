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
    _id: ID
    carType: String
    carMake: String
    carModel: String
    carYear: Int
    color: String
    price: Int
    isAvailable: Boolean
    locationAvail: String
    userRented: [String]
    ownedBy: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    location: String
    cars_rented: [Car]
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
    cars: [Car]
    user(_id: String!): User
    car(_id: String!): Car
    me: User
    
  }

  type TokenUser {
    token: ID!
    user: User
  }
  

  type Mutation {
    createUser(name: String!, email: String!, password: String!): TokenUser
    createUserNoToken(): User
    login(email: String!, password: String!): TokenUser
    createCar(carType: String!, carMake: String!, carModel: String!, carYear: Int!, color: String, price: Int!, isAvailable: Boolean!, locationAvail: String, ownedBy: String): Car
    cars_rented(car_id: ID!): User
  }
`;

module.exports = typeDefs;


// 