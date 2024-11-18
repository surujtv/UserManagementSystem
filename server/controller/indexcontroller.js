const UserModal = require('../modal/usermodal')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const transporter = require('../modal/emailConfig')

const userRegister = async (req, res) => {
    console.log(req.body)
    const { name, email, password, mobile, gender, city, state, pincode } = req.body
    try {
        const isExists = await UserModal.findOne({ email });
        console.log(isExists)
        if (isExists) {
            return res.status(400).json({
                success: false,
                msg: "Email already exists"
            });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        console.log(hashpassword)
        const user1 = new UserModal({
            name: name,
            email,
            password: hashpassword,
            mobile,
            gender,
            address: {
                city,
                state,
                pincode
            }
        });
        const userData = await user1.save();
        console.log(userData)
        return res.status(200).json({
            success: true,
            msg: "Registered Successfully",
            user: userData
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            msg: error
        })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const user = await UserModal.findOne({ email })
        console.log(user)
        if (user != null) {
            const isMatch = await bcrypt.compare(password, user.password)
            console.log(isMatch)
            if (user.email === email && isMatch) {
                const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                return res.status(200).json({
                    success: true,
                    msg: "Login Success",
                    record:user,
                    token:token
                })
            }
            else{
                return res.status(400).json({
                    success: false,
                    msg: "Email or Password is not valid"
                })
            }
            
        }else{
            return res.status(400).json({
                success: false,
                msg: "Please enter correct email or password!!"
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Please enter valid credentails"
        });
    }

}

const sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body
    if (email) {
        const user = await UserModal.findOne({ email: email })
        if (user) {
            const secret = user._id + process.env.JWT_SECRET_KEY
            const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '30m' })
            const link = `http://localhost:3000/forgotpassword`
            //react js path : api/user/reset/:id/:token
            console.log("Link:====>",link)

            var mailOptions = {
                from: process.env.EMAIL_USER, // sender address
                to: user.email, // list of receivers
                subject: "Reset Password", // Subject line
                text: "Link for Password Reset", // plain text body
                html: "<h3>Hii " + user.name + ",Please copy this link <a href="+link+"> and reset your password</a></h3>"
            } 
            let info = await transporter.sendMail(mailOptions)
            return res.status(200).json({
                success: true,
                msg: "Password Reset Email Send...Please Check Your Email",
                "Info":info,
                id:user._id,
                token:token
            })
        } else {
            return res.status(400).json({
                success: false,
                msg: "Email does not exists.",
            })
        }
    } else {
        return res.status(400).json({
            success: false,
            msg: "Email Fields are required",
        })
    }
}
/*
http://localhost:3000/api/user/reset/65c320d1a1dbbfb7ed48b28f/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NWMzMjBkMWExZGJiZmI3ZWQ0OGIyOGYiLCJpYXQiOjE3MDczNzExODIsImV4cCI6MTcwNzM3Mjk4Mn0.aNVtv_eBsCuQrim24xfNhcDYdqla7vsXiIxpAQ0cViQ
*/
const userPasswordReset = async (req, res) => {
    const { password, confirm_password } = req.body
    const { id, token } = req.query
    console.log("get:===>", id, token)
    console.log(password,confirm_password)
    try {
        const user = await UserModal.findById(id)
        const new_secret = user._id + process.env.JWT_SECRET_KEY
        const {userID} = jwt.verify(token, new_secret)
        console.log(userID)
        if (password && confirm_password) {
            if (password !== confirm_password) {
                return res.status(400).json({
                    success: false,
                    msg: "New Password and Confirm Password doesn't match",
                })
            } 
            else {
               // const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(password, 10)
                console.log(user._id)
                const data = await UserModal.findByIdAndUpdate({_id:user._id}, { $set: { password: newHashPassword } },{
                    new: true,
                    useFindAndModify: false
                })
                return res.status(200).json({
                    success: true,
                    msg: "Password reset successfully",
                    record:data
                })
            }
        } 
        else {
            return res.status(400).json({
                success: false,
                msg: "All Fields required",
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Invalid Token.",
        })
    }
}

module.exports = {
    userRegister,
    userLogin,
    sendUserPasswordResetEmail,
    userPasswordReset
}