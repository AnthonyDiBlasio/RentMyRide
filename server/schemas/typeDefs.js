const { gql } = require('apollo-server-express');

// Orginal Booking Typedef:  Need to build scalar for the DATE type - https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql

const typeDefs = gql`

  type Car {
    _id: ID
    carType: String
    carMake: String
    carModel: String
    carYear: Int
    color: String
    price: Int
    image: String
    isAvailable: Boolean
    locationAvail: String
    carOwner: User
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    carsRented: [Booking]
    location: String
  }

  type Booking {
    _id: ID
    rentedCar: Car
    reservDate: String
    returnDate: String
    totalBill: Int
    billingDate: String
    lateFee: Int
    message: String
  }
  
  type Query {
    users: [User]
    cars: [Car]
    user(_id: String!): User
    car(_id: String!): Car
    booking(_id: String): Booking
    me: User
    
  }

  type TokenUser {
    token: ID!
    user: User
  }
  

  type Mutation {
    createUser(name: String!, email: String!, password: String!): TokenUser
    createUserNoToken(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): TokenUser
    createCar(carType: String!, carMake: String!, carModel: String!, carYear: Int!, color: String, price: Int!, image: String, isAvailable: Boolean!, locationAvail: String, carOwner: String): Car
    createBooking(rentedCar: ID!, reservDate: String, returnDate: String, totalBill: Int, billingDate: String, lateFee: Int, message: String): Booking
    removeCar(cardId: ID, bookingId: ID): Car
    cancelBooking(bookingId: ID): User
  }
`;

module.exports = typeDefs;