const express=require('express')
const app=express.Router()
const User= require('../model/user')


app.route('/').get(async(req,res)=>{
    try{
        







        let filter={}
        const {firstName,lastName,emailAddress,socialAccount,portfolioWebsite,tagline}=req.query
        if(firstName) filter.firstName=firstName
        if(lastName)filter.lastName=lastName
        if(emailAddress)filter.emailAddress=emailAddress
        if(socialAccount)filter.socialAccount=socialAccount
       
        if(portfolioWebsite)filter.portfolioWebsite=portfolioWebsite
    const get_all_user= await User.find(filter).workDetails("ward_id").sort()
    if(!get_all_user)return res.json({
        msg:"user  not exist ",
        code:404,
    })

    res.json({
        msg:"successful",
        data:get_all_user,
        code:200
       
    })
}
    catch(err){
        
        console.log(err); 

    res.status(500).send(err)
    res.json({msg:"failed to retrieve user"})
    }
})

app.route('/create').post(async(req,res)=>{
    if(!req.body)return res.json({
        msg:"request body is missing or incomplete",
        code:"400"
    })

    try{
        const found_User_no= await User.find({"email":req.body.email})

       
    //    console.log("found",found_User_no)
if(found_User_no)return res.json({
    msg:"Email already exist "
})

const user=   new User(req.body)
console.log(user)
await user.save()


res.json({
    msg:"successful",
    data:user,
    code:200
})
    }
    catch(err){
       
        res.status(500).send(err)
        console.log(err);
        res.json({
            msg:"failed to create User"
        })
    }
})


.put(async(req,res)=>{
    if(!req.params.id)return res.json({
        msg:"request body missing or incomplete",
        code:400

    })
    try{
        const User= await User.findById(req.params.id)
const updated_User={...User._doc,...req.body}
User.overwrite(updated_User)
 await User.save()
res.json({
  msg:"success",
  data:User,
    code:200
})

    }
    catch(err){
        res.status(500).send(err)
        res.json({
            msg:"failed to update User"
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
     const User=   await User.findById(req.params.id)
     if(!User)return res.json({
        msg:"User does not exist",
        code:404
     })
await User.findByIdAndDelete(req.params.id)

     res.json({
        msg:"User deleted",
        code:200
     })
    }
    catch(err){
        res.status(500).send(err)
        console.log(err);
        res.json({
        msg:"failed to delete User"    
        })
    }
})
module.exports=User