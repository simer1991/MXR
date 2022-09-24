import mongoose from "mongoose";
import validator from "validator";

const mixedRealitySchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    homePhone:{
        type:Number,
        required:[true,"phone number is required"]
       
 
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail]

    },
    companyName:{
        type:String,
      
    },

    projectType:{
        type:String,
        enum:["safety Training","Repair & Maintenance","Healthcare","Remote operations"],
        required:true
    },
    estimatedBudget:{
        type:Number,
        required:true
    }
})

const MixedReality = new mongoose.model("MixedReality",mixedRealitySchema);

export default MixedReality;