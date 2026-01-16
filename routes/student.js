const express = require("express");

const Router = express.Router();

let data = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Doe"}
]

Router.get("/",(req,res)=>{
    res.json(data)
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