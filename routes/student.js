const express = require("express");
const StudentModel = require("../models/studentmodel");

const Router = express.Router();

let data = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Doe"}
]

Router.get("/",async (req,res)=>{
    let paramsObj = req.query
    let result = await StudentModel.find({})
    res.json(result)
})
Router.get("/:id",(req,res)=>{
    let id = req.params.id
    console.log(id)
    let result = data.find((x)=>x.id == id)
    res.json(result)
})

Router.post("/",(req,res)=>{
    const body = req.body
    let arr = ["studentName","cnic"]

    let errArr = []
    arr.forEach((key)=>{
        if(!body[key]){
            errArr.push(`${key} is missing`)
        }
    })

    if(errArr.length > 0){
        res.json({
            success: false,
            message: errArr.join(", "),
            data: errArr
        })
    }

    const obj = new StudentModel(body)
    obj.save()
    .then((result)=>{
        res.json({
            success: true,
            message: "Successfully Added",
            data: result
        })
    })
    .catch((err)=>{
        res.status(400).json({
            success: false,
            message: err.message,
            data: null
        })
    })

})

module.exports = Router