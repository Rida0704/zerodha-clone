const { Signup, Login, verifyUser, Logout } = require('../Controllers/AuthControllers')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/verify', verifyUser)
router.post('/logout', Logout)

module.exports = router