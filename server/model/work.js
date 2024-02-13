const mongoose=require('mongoose')
const Schema=mongoose.Schema

const WorkExperienceSchema= new Schema({
    skills:{type:String},
    education:{type:String},
    projects:{type:String},
    workExp :{type:String},
   
    
    
})

const WorkExperience=mongoose.model('workExperience', WorkExperienceSchema  )
module.exports=WorkExperience