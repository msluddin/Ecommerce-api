const express = require('express');
const { createCart, updateCart, deleteCart, getCart, getAll } = require('../controllers/cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../controllers/verifyToken');
const router = express.Router();

//CREATE
router.post('/', verifyToken, createCart);

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateCart);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

//@GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getCart);

//@GET ALL
router.get('/', verifyTokenAndAdmin, getAll)

module.exports = router