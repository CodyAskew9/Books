import mongoose from "mongoose";

const classASchema = new mongoose.Schema(
    {
    name:{type: String, required: true},
    books:{type: String, required: false},
    
}, {
    timestamps:true
});

const ClassA = mongoose.model("classA", classASchema);
export default ClassA;
