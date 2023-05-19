const errorHandler=(err,req,res,next)=>{
    const statuscode=res.statuscode?res.statuscode:500 
    switch(statuscode){
        case 400:
            res.json({
                title:"Validation Error",
                message:err.message
            })
            break;
        case 404:
            res.json({title:"Not Found",message:err.message})
            break;
        default:
            break;
    }
}
module.exports=errorHandler