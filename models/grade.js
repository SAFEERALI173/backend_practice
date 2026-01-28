const mongoose = require("mongoose");

const GradeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    totalStudents:{
        type:Number,        
    }
})

const GradeModel = mongoose.model("grade",GradeSchema)

module.exports = GradeModel