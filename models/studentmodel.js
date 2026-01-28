const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    studentName: {
        type: String,
        required:true
    },
    contact:{
        type: String,        
    },
    cnic:{
        type:String,
        unique:true
    }
})

const StudentModel = mongoose.model("students",StudentSchema)
module.exports = StudentModel