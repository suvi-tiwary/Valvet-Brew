
import mongoose from "mongoose"
const shopSchema = new mongoose.Schema({
name:{
    type:String,
    require:true
},
address:{
    type:String,
    require:true
},

},{timestamps:true})