import MixedReality from "../../models/projectModels/mixedReality.js"

export const  mixed = async(req,res)=>{
    const {firstName,lastName,email,homePhone,companyName,projectType,estimatedBudget} = req.body
    try {
        if(!(firstName || lastName || homePhone ||  projectType || estimatedBudget)) return res.status(400).json({status:"failed",message:"Please fill the required fields"})
        const mixedProject = await MixedReality.create({
            firstName:firstName,
            lastName:lastName,
            homePhone:homePhone,
            email:email,
            companyName:companyName,
            projectType:projectType,
            estimatedBudget:estimatedBudget
        })

        res.status(201).json({
            status:"sucess",
            mixedProject
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:"something went wrong"
        })
    }
}
