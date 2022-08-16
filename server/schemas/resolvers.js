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
    booking: async(parent, { _id }) => {
      return await Booking.findOne({ _id: ObjectId(_id) });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("cars_rented");
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

    // createCar: async(parent, {carType, carMake, carModel, carYear, color, price, isAvailable, locationAvail, ownedBy})

    createCar: async (parent, args) => {
      const car = await Car.create(args);
      return car;
    },

    // carsRented: async (parent, { car_id }, context) => {
    //   // if (context.user) {
    //     const carResult = await Car.findOne({ _id: car_id });
    //     if (carResult) {
    //       const userWithCar = await User.findOneAndUpdate(
    //         // context refers to token created when user is logged in
    //         { _id: context.user._id },
    //         // {_id: ObjectId("62f7a4458ee68bbb0eef7e02")},
    //         {
    //           $addToSet: {
    //             cars_rented: {
    //               // carType: args.carType,
    //               // carMake: args.carMake,
    //               // carModel: args.carModel,
    //               // carYear: args.carYear,
    //               // color: args.color,
    //               // price: args.price,
    //               // isAvailable: args.isAvailable,
    //               // locationAvail: args.locationAvail,
    //               // ownedBy: args.ownedBy
    //               _id: car_id,
    //             },
    //           },
    //         },
    //         { new: true }
    //       ).populate("cars_rented");

    //       console.log(userWithCar);
    //       return userWithCar;
    //     } else {
    //       throw new Error ("Could not find Car")
    //     }
    //   // } 
    // },
  
    // create a booking between a user and a car

    // createBooking: async (parent, args) => {
    //   const booking = await Booking.create(args);
    //   return booking;
    // },
    
    createBooking: async (parent, { car_id, booking_id }, context) => {
      const booking = await Car.findOne({ _id: car_id});
      if (booking) {
        const userBooked = await User.findOneAndUpdate(
          // context refers to token created when user is logged in
          { _id: context.user._id },
          // {_id: ObjectId("62f7a4458ee68bbb0eef7e02")},
          {
            $addToSet: {
              carsRented: {
                // carOwnedBy: args.carOwnedBy,
                // userRented: args.userRented,
                // reservDate: args.reservDate,
                // returnDate: args.returnDate,
                // totalBill: args.totalBill,
                // billingDate: args.billingDate,
                // lateFee: args.lateFee,
                // message: args.message,
                _id: booking_id
              }
            }
          },
          { new: true }
        ).populate("carsRented");
      return userBooked;
    } else {
      throw new Error ("Could not find Car")
    }
  },

    //TODO Login
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
    }
  },
};

module.exports = resolvers;