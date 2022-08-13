const { User, Car } = require('../models');
const { ObjectId } = require("mongoose").Types;

const { AuthenticationError } = require('apollo-server-express');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { _id }) => {
      return await User.findOne({_id: ObjectId(_id)});
    },
    cars: async () => {
      return await Car.find({});
    }
  },
  Mutation: {
    createUser: async(parent, {first_name, Last_name, email, password}) => {
      const user = await User.create({first_name, Last_name, email, password});
      return user;
    },

    // createCar: async(parent, {carType, carMake, carModel, carYear, color, price, isAvailable, locationAvail, ownedBy})

    createCar: async(parent, args) => {
      const car = await Car.create(args);
      return car;
    },

    //TODO Login
    login: async(parent, {email, password}) => {
      // make sure user exists
      const user = await User.findOne({ email });
      if(!user) {
        throw new AuthenticationError('No user with such email');
      }

      // check password
      const correctPw = await User.comparePassword(password);

      if (!correctPw) {
        throw new AuthenticationError('incorrect password!');
      }

      // get the user token
      const token = signToken(user);
      return {token, user};
    }
  },
};

module.exports = resolvers;
