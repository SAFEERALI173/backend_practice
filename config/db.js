const mongoose = require("mongoose")

const connectDB = () =>{
    return new Promise((resolve,reject)=>{
        mongoose.connect("mongodb+srv://safeerali:Pak12345@cls1.vnzgid8.mongodb.net/")
        .then(()=>{
            console.log("DB Connected")
            resolve()
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = connectDB