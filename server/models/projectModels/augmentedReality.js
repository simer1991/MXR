import mongoose from "mongoose";
import validator from "validator";

const augmentedRealitySchema = new mongoose.Schema({
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
        enum:["Tourism and culture AR apps","Real estate AR apps","Training and education AR apps","Retail AR apps"," Healthcare AR apps"],
        required:true
    },
    estimatedBudget:{
        type:Number,
        required:true
    }
})

const AugmentedReality = new mongoose.model("AugmentedReality",augmentedRealitySchema);

export default AugmentedReality;