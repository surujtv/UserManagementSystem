const express = require('express')
const router = express.Router()
const indexcontroller = require('../controller/indexcontroller')

router.post('/register',indexcontroller.userRegister)
router.post('/login',indexcontroller.userLogin)
router.post('/senduserpasswordresetemail',indexcontroller.sendUserPasswordResetEmail)

router.post('/userpasswordreset',indexcontroller.userPasswordReset)

module.exports = router