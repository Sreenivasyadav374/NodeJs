const express=require("express")
const {getContacts,getContact,updateContact,createContact,deleteContact}=require("../controllers/contactController")

const router=express.Router()

router.route("/").get(getContacts).post(createContact)
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact)



module.exports=router;