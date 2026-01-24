const express = require("express");

const Router = express.Router();

let data = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Doe"}
]

Router.get("/",(req,res)=>{
    let paramsObj = req.query
    console.log(paramsObj)
    res.json(data)
})
Router.get("/:id",(req,res)=>{
    let id = req.params.id
    console.log(id)
    let result = data.find((x)=>x.id == id)
    res.json(result)
})

Router.post("/",(req,res)=>{
    const body = req.body
    let arr = ["name","age"]

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

    res.json(body)
})

module.exports = Router