const mongoose =require("mongoose") 

const Schema=mongoose.Schema
const UserSchema= new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    socialAccount :{type:String},
    portfolioWebsite:{type:String},
    tagline:{type:String},
    password:{type:String},
    workDetails:{
        type:Schema.Types.ObjectId,ref:"branches",required:true
    },
    
    
})

const User=mongoose.model('users', UserSchema  )
module.exports=User