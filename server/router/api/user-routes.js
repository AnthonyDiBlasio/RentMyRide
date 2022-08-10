const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
    login,
    logout,
} = require('../../controllers/user-controllers');

// import middleware
// const { authMiddleware } = require('../../utils/auth');

// GET all Users (test purpose)
router.route('/').get(getAllUsers);

// put authMiddleware anywhere we need to send a token for verification of user
// in the mean time, let's put no auth yet

// api/users (create user)
router.route('/').post(createUser); 

// api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// api/users/login
router.route('/login').post(login);

// api/users/logout
router.route('/logout').post(logout);