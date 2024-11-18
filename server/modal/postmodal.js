const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    post_description:{
        type:String,
        required:[true,"Description is required"],
        trim:true
    },
    post_img:{
        type:String,
        required:[true,"Image is required"],
        trim:true
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    },
})
const postmodal = mongoose.model("post",postSchema)
module.exports = postmodal