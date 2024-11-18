const UserModal = require('../modal/usermodal')
const PostModal = require('../modal/postmodal')

const fetchUsers = async (req, res) => {
    try {
        const userdata = await UserModal.find()
        return res.status(200).json({
            success: true,
            records: userdata
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error
        })
    }
}
const fetchSingleUser = async (req, res) => {
    const { _id } = req.query
    try {
        const userdata = await UserModal.find({ _id })
        return res.status(200).json({
            success: true,
            records: userdata
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error
        })
    }
}
const manageUserStatus = async (req, res) => {
    const { id, s } = req.query
    console.log("get id:===>", id, s)
    if (s == "block") {
        try {
            const result = await UserModal.findByIdAndUpdate({
                _id: id
            }, {
                $set: {
                    status: 0
                }
            }, {
                new: true,
                useFindAndModify: false
            })
            res.status(200).json({
                success: true,
                msg: result,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                msg:"status not updated"
            })
        }
    }
    else if (s == "verify") {
        try {
            
        
        const result = await UserModal.findByIdAndUpdate({
            _id: id
        }, {
            $set: {
                status: 1
            }
        }, {
            new: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            msg: result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            msg:"status not updated"
        })  
    }
    }
    else {
        try {
            await UserModal.findByIdAndDelete({
                _id: id
            }, {
                new: true,
                useFindAndModify: false
            })
            res.status(200).json({
                success: true,
                msg: "User Record Deleted Successfully!!",
            })
        }
        catch (error) {
            res.status(400).json({
                success: false,
                msg: "User Record Not Deleted !!",
            })
        }
    }
}

const fetchPosts = async (req, res) => {
    try {
    const posts = await PostModal.find().populate("userId")
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
    fetchUsers,
    fetchSingleUser,
    manageUserStatus,
    fetchPosts
}