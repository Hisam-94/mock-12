const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({   
    category: String,
    difficulty: String,
    question: String,
    answer: String,
    option1: String,
    option2: String,
    option3: String,
},{timestamps:true})

const QuestionModel  = mongoose.model("question",questionSchema)

module.exports = {
    QuestionModel
}