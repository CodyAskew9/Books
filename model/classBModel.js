import mongoose from "mongoose";

const classBSchema = new mongoose.Schema(
    {
    name:{type: String, required: true},
    books:{type: String, required: false},
    
}, {
    timestamps:true
});

const ClassB = mongoose.model("classB", classBSchema);
export default ClassB;
