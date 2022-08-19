const { User, Car, Booking } = require("../models");
const { ObjectId } = require("mongoose").Types;

const { AuthenticationError } = require("apollo-server-express");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { _id }) => {
      return await User.findOne({ _id: ObjectId(_id) });
    },
    cars: async () => {
      return await Car.find({});
    },
    car: async (parent, { _id }) => {
      return await Car.findOne({ _id: ObjectId(_id) });
    },
    // *Tom's addition - add populate to pop rentedCar and execute via .exec()
    booking: async(parent, { _id }) => {
      return await Booking.findOne({ _id: ObjectId(_id) }).populate("rentedCar").exec();
    },
    // original Booking query
    // booking: async(parent, { _id }) => {
    //   return await Booking.findOne({ _id: ObjectId(_id) });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("carsRented");
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    createUser: async (parent, {name, email, password}) => {
      const user = await User.create({name, email, password});

      const token = signToken(user);
      return {
        token: token,
        user: user
      };
    },

    createUserNoToken: async (parent, { name, email, password }) => {
      const user = await User.create({name, email, password});
      return user;
    },

    login: async(parent, {email, password}) => {
      // make sure the user exists
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      // check the password
      const correctPw = await user.comparePassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      // get the user token
      const token = signToken(user);
      return {token, user};
    },

    // createCar: async(parent, {carType, carMake, carModel, carYear, color, price, isAvailable, locationAvail, ownedBy, image})

    createCar: async (parent, {carType, carMake, carModel, carYear, color, price, isAvailable, locationAvail, ownedBy, image}) => {
      const car = await Car.create({carType, carMake, carModel, carYear, color, price, isAvailable, locationAvail, ownedBy, image});
      return car;
    },
  
    // create a booking between a user and a car
    // Tom's solution
    createBooking: async (parent, args, context) => {
      // if (context.user) {
        const booking = await Booking.create({
          // adding rentedCar arg
          rentedCar: args.rentedCar,
          reservDate: args.reservDate,
          returnDate: args.returnDate,
          totalBill: args.totalBill,
          billingDate: args.billingDate,
          lateFee: args.lateFee,
          message: args.message,
        });
        
        const userBooking = await User.findOneAndUpdate(
          // { _id: context.user._id },
          { _id: ObjectId("62fed91fb7dd79dfe7cea556")},
          { 
            $addToSet: { 
              carsRented: booking._id 
            },
          },
          { new: true }
        );
        return userBooking;
        // return booking;
    // }
    // throw new AuthenticationError("You need to be logged in");
    },

    // Original solution
    // createBooking: async (parent, args, context) => {
    //   // if (context.user) {
    //     const booking = await Booking.create({
    //       reservDate: args.reservDate,
    //       returnDate: args.returnDate,
    //       totalBill: args.totalBill,
    //       billingDate: args.billingDate,
    //       lateFee: args.lateFee,
    //       message: args.message,
    //     });
        
    //     const userBooking = await User.findOneAndUpdate(
    //       // { _id: context.user._id },
    //       { _id: ObjectId("62fec19369146e8576e4c348")},
    //       { 
    //         $addToSet: { 
    //           carsRented: booking._id 
    //         },
    //       },
    //       { new: true }
    //     );
    //     return userBooking;
    //     // return booking;
    // // }
    // // throw new AuthenticationError("You need to be logged in");
    // },

    removeCar: async (parent, { carId, bookingId }, context) => {
      if (context.user) {
        const car = await Car.findOneAndDelete({ _id: carId });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { carRented: bookingId } }
        );
        return car;
      }
      throw new AuthenticationError("You need to be logged in")
    },

    cancelBooking: async (parent, { bookingId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              carsRented: {
                __id: bookinId
              }
            }
          },
          { new: true }
        )
      }
      throw new AuthenticationError("You need to be logged in")
    },
  },
};

module.exports = resolvers;