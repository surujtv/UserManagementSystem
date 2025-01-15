const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
var uri = process.env.MONGODB_URL
mongoose.connect(uri)
.then((result)=>{
    console.log("Successfully connected Mongoose to MongoDB Database!!!")
    // console.log(result)
})
.catch((err)=>{
    console.log("Database Error:",err)
})

module.exports = mongoose