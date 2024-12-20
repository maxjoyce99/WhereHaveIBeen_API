const express = require('express');
const router = express.Router();

const {
    loginUser,
    registerUser,
    updateUser,
    deleteUser,
    getAllUsers,
    friendUser,
    getFriendsList,
    unFriend,
    requestUser,
    getPendingList,
    removePending
} = require("../controllers/userController");


//Register a new user
router.post('/new',registerUser);

//Get all users
router.get('/userlist', getAllUsers);

//Get friends list
router.get('/friendslist/:id', getFriendsList);

//Get pending request list
router.get('/pendinglist/:id', getPendingList);

//Friend a user/accept friend (need to change);
router.patch('/frienduser', friendUser);

//Request a user
router.patch('/requestuser', requestUser);

//Delete a friend
router.patch('/unfriend', unFriend);

//Delete a friend
router.patch('/removepending', removePending);

//Update A user
router.patch('/update/:id',updateUser);

//Login with existing user
router.post('/existing',loginUser);

//Delete a user (and all files??)
router.delete('/delete/:id', deleteUser);

module.exports = router;