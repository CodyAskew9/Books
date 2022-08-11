import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
    {
    Title:{type: String, required: true},
    author:{type: String, required: true},
    isbn:{type: String, required: true},
    
}, {
    timestamps:true
});

const Books = mongoose.model("books", booksSchema);
export default Books;
