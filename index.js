const express = require("express")
const app = express()
const StudentRoute = require("./routes/student")
app.use(express.json())


app.use("/student",StudentRoute)


app.listen(5000,()=>{
    console.log("Server is Running on Port 5000, Url = http://localhost:5000")
})
