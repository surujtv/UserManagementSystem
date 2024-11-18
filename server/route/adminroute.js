const express = require('express')
const router = express.Router()
const admincontroller = require('../controller/admincontroller')

router.get('/userlist',admincontroller.fetchUsers)
router.get('/user',admincontroller.fetchSingleUser)
router.get('/managuserstatus',admincontroller.manageUserStatus)
router.get('/posts',admincontroller.fetchPosts)
module.exports = router