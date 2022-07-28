const express = require('express');
const { updateUser, deleteUser, getUser, getAllUsers, getStatsUsers } = require('../controllers/user');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../controllers/verifyToken');
const router = express.Router();

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateUser)

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

//@GET ROUTE
router.get('/find/:id', verifyTokenAndAdmin, getUser)

//@GET ALL USER ROUTE
router.get('/', verifyTokenAndAdmin, getAllUsers)

//@GET ALL USER ROUTE
router.get('/stats', verifyTokenAndAdmin, getStatsUsers)


module.exports = router