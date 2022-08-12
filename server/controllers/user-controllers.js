const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    // GET all Users
    async getAllUsers(req, res) {
        const users = await User.find({});

        if (!users) {
            return res.status(400).json({ message: 'Warning, cannot create user!'});
        }

        res.staus(200).json(users);
    },

    // POST create user
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
        
        res.staus(200).json(user);
    },

    // GET single user by id or username
    async getSingleUser({ user = null, params }, res) {
        const userFound = await User.findOne({
            $or: [{ _id: user ? user._id : params.userId }, { username: params.username }],
        });

        if (!userFound) {
            return res.status(400).json({ message: 'Cannot find user!'});
        }

        res.staus(200).json(userFound);
    },

    // Update User (edit profile)
    async updateUser({ user, body }, res) {
      console.log(user);
      try {
        const user = await User.findOneAndUpdate(
          { _id: user._id },
          { $set: body },
          { runValidators: true, new: true }
        );
        return res.json(user); 
      } 
      catch (err) {
        return res.status(400).json(err);
      }
    },

    // DELETE user
    async deleteUser(req, res) {
        const user = await User.findOneAndRemove(
          { _id: user._id },
        );
        if (!userDelete) {
          return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(userDelete);
    },

    // Create Car with identifying User first and save under cars_rented
    // async createCar({ user, body }, res) {
    //   try {
    //     const user = await User.findOneAndUpdate(
    //       { _id: req.body._id },
    //       { $addToSet: { cars4Rent: body }},
    //       { new: true, runValidators: true }
    //   );
    //   return res.json(user);
    //   }
    //   catch (err) {
    //     rconsole.log(err);
    //     return res.status(400).json(err);
    //   }
    // },

    // login 
    async login({ body }, res) {
      const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
      if (!user) {
        return res.status(400).json({ message: "Can't find this user" });
      }
  
      const correctPw = await user.isCorrectPassword(body.password);
  
      if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    },
};