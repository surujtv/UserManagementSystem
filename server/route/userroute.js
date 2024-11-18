const express = require('express')
const router = express.Router()
const imgUpload = require('../modal/imgupload')
const usercontroller = require('../controller/usercontroller')
const authMiddleware = require('../middleware/auth-middleware')

//middleware
router.use('/changepassword',authMiddleware)
router.use('/editprofile',authMiddleware)
router.use('/post',authMiddleware)
router.use('/postlist',authMiddleware)

//routing
router.put('/editprofile', usercontroller.editProfile)
router.post('/post',imgUpload.single("post_img"),usercontroller.createPost)
router.get('/postlist',usercontroller.fetchUserPost)
router.post('/changepassword',usercontroller.changePassword)

module.exports = router