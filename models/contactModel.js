const { default: mongoose } = require("mongoose");

const contactModel=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide the name"]
    },
    email:{
        type:String,
        required:[true,"Please provide the email"]
    },
    phone:{
        type:Number,
        required:[true,"Please provide the number"]
    }
},{timestamps:true})

module.exports=mongoose.model("Contact",contactModel)