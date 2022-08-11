import express from "express";
import expressAsyncHandler from 'express-async-handler';
import data from "../data.js";
import ClassA from "../model/classAModel.js";

const classARouter = express.Router();

classARouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});
      const createdClassA = await ClassA.insertMany(data.ClassA);
      res.send({ createdClassA });
    })
  );
export default classARouter;