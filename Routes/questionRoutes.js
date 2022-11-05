const {Router} = require("express")
const { QuestionModel } = require("../Models/questionModel")
const QuestionRoute = Router()

QuestionRoute.post("/create", async(req,res)=>{
    try{
        const {category,difficulty,question,answer,option1,option2,option3} = req.body
        const data = new QuestionModel({            
            category,
            difficulty,
            question,
            answer,
            option1,
            option2,
            option3
        })
        await data.save()
        res.send("Data added successfully")
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went wrong"})
    }
})

QuestionRoute.get("/",async(req,res)=>{
    try{
        const {category,no_of_question,difficulty} = req.query
        const result = await QuestionModel.find({category,no_of_question,difficulty})
        let newResult = result.splice(0,Number(no_of_question))
        res.send(newResult)
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
})

module.exports = {
    QuestionRoute
}