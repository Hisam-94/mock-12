const express = require("express")
const { connection } = require("./Config/db")
const { QuestionRoute } = require("./Routes/questionRoutes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/question",QuestionRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server running on PORT ${PORT}`)
})