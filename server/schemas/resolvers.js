const { User } = require('../models');
const { ObjectId } = require("mongoose").Types;

const { AuthenticationError } = require('apollo-server-express');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
    // user: async () => {
    //   return User.find({});
    // },
    users: async () => {
      return User.find({});
    },
    user: async (parent, { _id }) => {
      return User.findOne({_id: ObjectId(_id)});
    }

    
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    createUser: async(parent, {first_name, Last_name, email, password}) => {
      const user = await User.create({first_name, Last_name, email, password});

      return user;
    },

    // createCar: async(parent, {})

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
