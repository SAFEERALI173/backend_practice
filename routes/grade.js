const express = require('express')
const { ResponseObj } = require('../config/helpers')
const GradeModel = require("../models/grade")

const Router = express.Router()

Router.get("/", async (req, res) => {
    try {
        const result = await GradeModel.find({})
        res.json(ResponseObj(true, "Success", result))
    } catch (error) {
        res.status(400).json(ResponseObj(false, "Internal Server Error", null, error))
    }
})

Router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await GradeModel.findById(id)
        res.json(ResponseObj(true, "Success", result))
    } catch (error) {
        console.log(error)
        res.status(400).json(ResponseObj(false, "internal Server Error", null, err))

    }
})

Router.post("/", (req, res) => {
    try {
        const body = req.body
        const Grade = new GradeModel(body)
        Grade.save()
            .then((result) => {
                res.status(201).json(ResponseObj(true, "Data Saved Successfully", result))
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(ResponseObj(false, "internal Server Error", null, err))
            })

    } catch (error) {
        console.log(error)
        res.status(400).json(ResponseObj(false, "internal Server Error", null, err))
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const result = await GradeModel.findByIdAndUpdate(id, body, {
            new: true
        })

        res.status(200).json(ResponseObj(true, "Updated Succesfully", result))

    } catch (error) {
        res.status(400).json(ResponseObj(false, "Internal Server Error", null, error))
    }
})


module.exports = Router