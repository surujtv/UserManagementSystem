var jwt = require('jsonwebtoken')
var UserModal  = require('../modal/usermodal')

const checkUserAuth = async (req,res,next)=>{
    let token 
    const {authorization} = req.headers
    console.log("Authorization=====>",authorization)
    
    if (authorization && authorization.startsWith('Bearer')) {
        try 
        {
          token = authorization.split(' ')[1]
           console.log("Token=====>",token)
           console.log("=======================")
          //Verify token
          const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY)
          console.log("UserID:",userID)
          console.log("=======================")

          //Get User From Token ,except password all data is get in req.user
           req.user = await UserModal.findById(userID).select('-password')
           console.log("User Details:",req.user)
           next()    
        } catch (error) {
            return res.status(401).json({
                success: false,
                msg: "Unauthorized User"
            })
        }
    }
    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "Unauthorized User, No Token"
        })
    }

}

module.exports = checkUserAuth