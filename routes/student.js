const express = require("express");
const StudentModel = require("../models/studentmodel");
const { ResponseObj } = require("../config/helpers");

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
Router.get("/:id",async (req,res)=>{
    try {        
        let id = req.params.id
        console.log(id)
        const result = await StudentModel.findById(id)
        res.json(ResponseObj(true,"Success",result))
    } catch (error) {
        res.status(400).json(ResponseObj(false,"Internal Server Error",null,error))
    }
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

Router.put("/:id",async (req,res)=>{
    try {
        let {id} = req.params
        let body = req.body

        let existing = await StudentModel.findById(id)
        if(existing){
            let result = await StudentModel.findByIdAndUpdate(id,body,{
                new:true
            })

            res.json(ResponseObj(true,"Successfully Updated",result))
        }else{
            res.status(404).json(ResponseObj(false,"Record Not Found"))
        }
    } catch (error) {
        res.status(400).json(ResponseObj(false,"Internal Server Error",null,error))
    }
})


Router.delete("/:id",async (req,res)=>{
    try {
        let {id} = req.params

        let existing = await StudentModel.findById(id)
        if(existing){
            await StudentModel.findByIdAndDelete(id)
            res.status(200).json(ResponseObj(true,"SUccessfully Deleted"))
        }else{
            res.status(404).json(ResponseObj(false,"Record Not Found"))
        }
    } catch (error) {
    res.status(500).json(ResponseObj(false,"Internal Server Error",null,error))        
    }
})

module.exports = Router