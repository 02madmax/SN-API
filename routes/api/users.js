const router = require('express').Router();

// Sets up all the routes for /api/users to use the methods from userController.js
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// get and create routes for users
router.route('/').get(getAllUsers).post(createUser);

//get one, update, and delete routes for users
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
//add and remove friends
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;