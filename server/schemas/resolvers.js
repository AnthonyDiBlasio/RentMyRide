const { User, Car, Booking } = require("../models");
const { ObjectId } = require("mongoose").Types;

const { AuthenticationError } = require("apollo-server-express");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("carsRented").populate({
        path: "carsRented",
        populate: "rentedCar"

      });
    },
    user: async (parent, { _id }) => {
      return await User.findOne({ _id: ObjectId(_id) });
    },
    cars: async () => {
      return await Car.find().populate("carOwner");
    },
    car: async (parent, { _id }) => {
      return await Car.findOne({ _id: ObjectId(_id) });
    },
    // *Tom's addition - add populate to pop rentedCar and execute via .exec()
    booking: async(parent, { _id }) => {
      return await Booking.findOne({ _id: ObjectId(_id) }).populate("rentedCar")
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("carsRented").populate({
          path: "carsRented",
          populate: "rentedCar"
        });
      }
      throw new AuthenticationError('You need to be logged in!');
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

    createCar: async (parent, args, context) => {
      if (context.user) {
        await Car.create({
          // adding rentedCar arg
          carType: args.carType,
          carMake: args.carMake,
          carModel: args.carModel,
          carYear: args.carYear,
          color: args.color,
          price: args.price,
          isAvailable: args.isAvailable,
          checkInDate:args.checkInDate,
          checkOutDate:args.checkOutDate,
          locationAvail: args.locationAvail,
          carOwner: context.user._id,
          image: args.image
        });
        return {};
      } 
    }, 
   // TODO retest
    // create a booking between a user and a car
    createBooking: async (parent, args, context) => {
      if (context.user) {
        const booking = await Booking.create({
          // this should be car rented _id
          rentedCar: args.rentedCar,
          reservDate: args.reservDate,
          returnDate: args.returnDate,
          totalBill: args.totalBill,
          message: args.message,
        });
        
      await User.findOneAndUpdate(
        { _id: context.user._id },
        // { _id: ObjectId("6300ed1b5b70aac0cef8408d")},
        { 
          $addToSet: { 
            carsRented: booking._id 
          },
        },
        { new: true }
      );
      return await Booking.findOne({ _id: ObjectId(booking._id) }).populate("rentedCar")
      }
      throw new AuthenticationError("You need to be logged in");
    },

// TODO retest
    removeCar: async (parent, { carId, bookingId }, context) => {
      if (context.user) {
       
        const car = await Car.findOneAndDelete({ _id: carId });

        // TODO remove bookings
        // TODO remove booking from user

      

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { carRented: bookingId } }
        // );
        
        return car;
      }
      throw new AuthenticationError("You need to be logged in")
    },
// TODO retest
    cancelBooking: async (parent, { bookingId }, context) => {
      // TODO update the status of booking as canceled
      // TODO do not delete the record we want to see history
      // if (context.user) {
        return User.findOneAndUpdate(
          {_id: ObjectId("62fd8e9b89f5c9490c3765dc")},
          // { _id: context.user._id },
          {
            $pull: {carsRented: bookingId}
          },
          { new: true }
        )
      // }
      // throw new AuthenticationError("You need to be logged in")
    },
  },
};

module.exports = resolvers;