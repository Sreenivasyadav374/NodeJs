const mongoose=require("mongoose")
const dotenv=require('dotenv').config()

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log("Database connected: ",connect.connection.host)
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }

}
module.exports=connectDb