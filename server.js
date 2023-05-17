const express=require('express')
const dotenv=require('dotenv').config()


const port=process.env.PORT||5000

const app=express()
app.listen(port,()=>{})
app.use("/api/contacts",require('./routes/contactsRoute'))