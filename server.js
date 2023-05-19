const express=require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv=require('dotenv').config()


const port=process.env.PORT||5000
connectDb();

const app=express()
app.listen(port,()=>{})
app.use(express.json())
app.use(errorHandler)
app.use("/api/contacts",require('./routes/contactsRoute'))
