const express=require('express')
const app=express.Router()
const WorkDetails= require('../model/work')


app.route('/').get(async(req,res)=>{
    try{
        







        let filter={}
        const {firstName,lastName,emailAddress,socialAccount,portfolioWebsite,tagline}=req.query
        if(firstName) filter.firstName=firstName
        if(lastName)filter.lastName=lastName
        if(emailAddress)filter.emailAddress=emailAddress
        if(socialAccount)filter.socialAccount=socialAccount
       
        if(portfolioWebsite)filter.portfolioWebsite=portfolioWebsite
    const get_all_WorkDetails= await WorkDetails.find(filter).sort()
    if(!get_all_WorkDetails)return res.json({
        msg:"WorkDetails  not exist ",
        code:404,
    })

    res.json({
        msg:"successful",
        data:get_all_WorkDetails,
        code:200
       
    })
}
    catch(err){
        
        console.log(err); 

    res.status(500).send(err)
    res.json({msg:"failed to retrieve WorkDetails"})
    }
})

app.route('/create').post(async(req,res)=>{
    if(!req.body)return res.json({
        msg:"request body is missing or incomplete",
        code:"400"
    })

    try{
        const found_WorkDetails_no= await WorkDetails.findById(req.body.email)

       
    //    console.log("found",found_WorkDetails_no)
if(found_WorkDetails_no)return res.json({
    msg:"Email already exist "
})

const WorkDetails=   new WorkDetails(req.body)

await WorkDetails.save()


res.json({
    msg:"successful",
    data:WorkDetails,
    code:200
})
    }
    catch(err){
       
        res.status(500).send(err)
        console.log(err);
        res.json({
            msg:"failed to create WorkDetails"
        })
    }
})


.put(async(req,res)=>{
    if(!req.params.id)return res.json({
        msg:"request body missing or incomplete",
        code:400

    })
    try{
        const WorkDetails= await WorkDetails.findById(req.params.id)
const updated_WorkDetails={...WorkDetails._doc,...req.body}
WorkDetails.overwrite(updated_WorkDetails)
 await WorkDetails.save()
res.json({
  msg:"success",
  data:WorkDetails,
    code:200
})

    }
    catch(err){
        res.status(500).send(err)
        res.json({
            msg:"failed to update WorkDetails"
        })
        console.log(err);
    }
})

.delete(async(req,res)=>{
    if(!req.params.id)return res.json({
        msg:"request body missing or incomplete",
        code:400
    })
    try{
     const WorkDetails=   await WorkDetails.findById(req.params.id)
     if(!WorkDetails)return res.json({
        msg:"WorkDetails does not exist",
        code:404
     })
await WorkDetails.findByIdAndDelete(req.params.id)

     res.json({
        msg:"WorkDetails deleted",
        code:200
     })
    }
    catch(err){
        res.status(500).send(err)
        console.log(err);
        res.json({
        msg:"failed to delete WorkDetails"    
        })
    }
})
module.exports=WorkDetails