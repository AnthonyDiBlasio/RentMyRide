const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
    // addCarToRent,
    // deleteCarToRent,
    login,
} = require('../../controllers/user-controllers');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// GET all Users (test purpose)
router.route('/').get(getAllUsers);

// put authMiddleware anywhere we need to send a token for verification of user
// in the mean time, let's put no auth yet

// api/users (create user)
router.route('/').post(createUser); 

// api/users/:userId
router.route('/:userId').get(authMiddleware ,getSingleUser).put(authMiddleware, updateUser).delete(deleteUser);

// api/users/:userId/car4rent/:car4rentId
// router.route(':userId/car4rent/:car4rentId').post(addCarToRent).delete(deleteCarToRent);

// note: users will have an array of cars they put up for rent.

// api/users/login
router.route('/login').post(login);

module.exports = router;