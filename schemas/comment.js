const mongoose = require("mongoose")
const commentSchema = new mongoose.Schema({
data :
{    
 "data":
    [
    {
    postId :{
        type : Number,
        required : true,
        unique : true,
    },
    commentId : {
        type : Number,
        required : true,
        unique : true
    },
    user : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    }, 
    createdAt : {
        type : Number,
        required : true,
        
    }
 }
]
}
})
module.exports = mongoose.model("comment", commentSchema);