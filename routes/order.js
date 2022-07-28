const express = require('express');
const { createOrder, updateOrder, deleteOrder, getOrders, getAllOrders, getMonthlyIncome } = require('../controllers/order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../controllers/verifyToken');
const router = express.Router();

//CREATE
router.post('/', verifyToken, createOrder);

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

//@GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, getOrders);

//@GET ALL ORDER
router.get('/', verifyTokenAndAdmin, getAllOrders)

//@GET MONTHLY INCOME 
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome)

module.exports = router