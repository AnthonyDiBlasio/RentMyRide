const { User, Tech, Matchup } = require('../models');
const { ObjectId } = require("mongoose").Types;

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
    }
  },
};

module.exports = resolvers;
