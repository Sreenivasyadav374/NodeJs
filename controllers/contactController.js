const Contact=require('../models/contactModel')

const asyncHandler=require("express-async-handler")


const getContacts=(req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}
const createContact=asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {name,phone,email}=req.body
    if(!name||!phone||!email){
        throw new Error("All fields are mandatory")
    }
    const contact= await Contact.create({
        name,email,phone
    })
    res.status(200).json(contact)
})
const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get a contact ${req.params.id}`})
})
const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`})
})
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`})
})


module.exports={getContacts,createContact,updateContact,deleteContact,getContact}