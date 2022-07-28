const express = require('express')
const router = express.Router();
const { userRegister, userLogin } = require('../controllers/auth');

//REGISTER
router.post('/register', userRegister)

//LOGIN
router.post('/login', userLogin)

module.exports = router