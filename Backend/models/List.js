import mongoose from "mongoose"

const ListSchema=mongoose.Schema({
    description:{type:String , required:true},
    date:{type:Date,required:true},
    
})