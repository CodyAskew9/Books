import express from "express";
import expressAsyncHandler from 'express-async-handler';
import data from "../data.js";
import Books from "../model/booksModel.js";

const booksRouter = express.Router();

booksRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});
      const createdBooks = await Books.insertMany(data.books);
      res.send({ createdBooks });
    })
  );
  booksRouter.post(
    '/',
    expressAsyncHandler(async (reg, res) => {
        const books = new Books ({
            title: "sample name" + data.now(),
            author: "sample author",
            isbn: "sample isbn"
        });
        const createdBooks = await books.save();
        res.send({message: "Book Added", books:createdBooks});
    })
  )
export default booksRouter;