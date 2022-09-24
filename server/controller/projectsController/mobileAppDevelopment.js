import Project from "../../models/projectModels/mobileAppDevelopment.js";

export const clientProject = async(req,res)=>{
    const {firstName,lastName,email,homePhone,companyName,projectType,estimatedBudget} = req.body
    try {
        if(!(firstName || lastName || homePhone ||  projectType || estimatedBudget)) return res.status(400).json({status:"failed",message:"Please fill the required fields"})
        const project = await Project.create({
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
            project
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:"something went wrong"
        })
    }
}
