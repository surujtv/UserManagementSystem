const PostModal = require('../modal/postmodal')
const UserModal = require('../modal/usermodal')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectId;
dotenv.config({ path: './config/config.env' })

const createPost = async (req, res) => {
    const { post_description, userId } = req.body
    const post_img = req.file.path
    console.log(post_description)
    console.log(post_img)
    console.log(userId)
    const Id = new ObjectId(userId)
    try {
        const postdata = new PostModal({
            post_description,
            post_img: `http://localhost:${process.env.PORTNO}/` + post_img,
            userId: Id
        })
        await postdata.save()
        return res.status(200).json({
            success: true,
            post: postdata
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            msg: "Image Not Uploaded!!"
        })
    }
}

const changePassword = async (req, res) => {
    const { password, confirm_password } = req.body
    if (password && confirm_password) {
        if (password !== confirm_password) {
            res.status(400).json({
                success: false,
                msg: "New Password and Confirm Password doesn't match",
            })
        } else {
            // const salt = await bcrypt.genSalt(10)
            const newHashPassword = await bcrypt.hash(password, 10)
            console.log(req.user._id)
            const updateduser = await UserModal.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } }, {
                new: true,
                useFindAndModify: false
            })
            res.status(200).json({
                success: true,
                msg: "Password changed successfully",
                updatedrecord: updateduser
            })
        }
    } else {
        res.status(400).json({
            success: false,
            msg: "All Fields are required",
        })
    }
}

const editProfile = async (req, res) => {
    const { name, mobile, gender, city, state, pincode } = req.body
    console.log(req.body)
    try {
        const updatedDetails = await UserModal.findByIdAndUpdate(
            req.user._id,
            { $set: { name: name, mobile: mobile, gender: gender, address: { city: city, state: state, pincode: pincode } } },
            { returnDocument: "after" })

        console.log(updatedDetails)
        return res.status(200).json({
            success: true,
            msg: "User Record Updated Successfully !",
            record: updatedDetails
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            msg: "User Record Not Updated!",
            Error: error
        })
    }
}

const fetchUserPost = async (req, res) => {
    const { id } = req.query
    const userid = new ObjectId(id)
    console.log("Get UserID:", userid)
    // console.log(id)
    try {
        const posts = await PostModal.find({ userId:userid })
        console.log(posts)
        return res.status(200).json({
            success: true,
            post: posts
        })
        
    }
    catch (error) {
        return res.status(200).json({
            success: false,
            Error: error
        })
    }
}


module.exports = {
    createPost,
    changePassword,
    editProfile,
    fetchUserPost
}