import mongoose from "mongoose";

const kidSchema = new mongoose.Schema(
    {
    name:{type: String, required: true},
    
}, {
    timestamps:true
});

const Kids = mongoose.model("kids", kidSchema);
export default Kids;
