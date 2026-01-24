const express = require("express")
const app = express()
const StudentRoute = require("./routes/student")
app.use(express.json())
const connectDB = require("./config/db")

app.use("/student",StudentRoute)

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log("Server is Running on Port 5000, Url = http://localhost:5000")
    })
}).catch((err)=>{
    console.log(err)
})


