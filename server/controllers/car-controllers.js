const { Car, User } = require('../models');
const mongoose = require('mongoose');

module.exports ={
    // Create a Car (without finding associates User)
    async createCar({ body }, res) {
        const car2Rent = await Car.create(body);

        if (!car2Rent) {
            return res.status(400).json({ message: 'Unable to create car listing!' });
        }
        res.status(200).json(car2Rent);
    },

    // Create Car with identifying User first and save under cars_rented
    // async createCar(req, res) {
    //     const car = await Car.create(req.body)
        
    //     if (!car) {
    //         return res.status(400).json({ message: 'Unable to create car listing!' });
    //     }

    //     const user = await User.findOneAndUpdate(
    //         { _id: req.body.userId },
    //         { $addToSet: { cars_rented: car._id }},
    //         { new: true}
    //     )
        
    //     if (!user) {
    //         return res.status(404).json({ message: 'Unable to create car listing!' });
    //     }
    //     res.status(200).json(user);
    // },

    // GET all Cars
    async getAllCars(req, res) {
        const allCars = await Car.find({});

        if (!allCars) {
            return res.status(400).json({ message: 'Cannot find cars!' });
        }
        res.status(200).json(car2Rent);
    },

    // GET single Car
    async getSingleCar(req, res) {
        const { id } = req.params

        // Check whether it's a valid mongoose object ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'No such carId!'})
        }

        const foundCar = await Car.findById(id);

        if (!foundCar) {
            return res.status(400).json({ message: 'Cannot find car with such ID!' });
        }
        res.status(200).json(foundCar);
    },

    // Delete Car from listing
    async deleteCar(req, res) {
        const car = await Car.findOneAndRemove(
            { _id: car.carId }
        );
        if (!car) {
            return res.status(400).json({ message: 'Cannot find car with such ID!' });
        }
        res.status(200).json(car);
    },
}