const router = require('express').Router();
const {
    createCar,
    getAllCars,
    getSingleCar,
    updateCar,
    deleteCar
} = require('../../controllers/car-controllers');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// api/cars GET Cars
router.route('/').get(getAllCars).post(createCar);

// api/cars/:carId
router.route('/:carId').get(getSingleCar).put(updateCar).delete(deleteCar);