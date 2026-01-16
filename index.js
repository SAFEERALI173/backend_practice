const express = require("express")
const app = express()
let data = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Doe"}
]
app.get("/",(req,res)=>{
    res.json(data)
})

app.get("/abc",(req,res)=>{
    res.send("Hello from ABC Route")
})

app.listen(5000,()=>{
    console.log("Server is Running on Port 5000, Url = http://localhost:5000")
})
