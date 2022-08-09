import mongoose from "mongoose";

const kidSchema = new mongoose.Schema(
    {
    name:{type: String, required: true},
    books:{type: String, required: false},
    
}, {
    timestamps:true
});

const Kids = mongoose.model("kids", kidSchema);
export default Kids;
