const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const login = require('../controllers/UserController')
const router = express.Router()

router.post('/users', login.userRegister)
router.post('/users/login', login.userLogin)
router.get('/users/me', auth, login.userProfile)
router.post('/users/me/logout', auth, login.userLogout)
router.post('/users/me/logoutall', auth, login.userLogoutAll)

module.exports = router