import express from "express";
import expressAsyncHandler from 'express-async-handler';
import data from "../data.js";
import ClassB from "../model/classBModel.js";

const  classBRouter = express.Router();

classBRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});
      const createdClassB = await ClassB.insertMany(data.classB);
      res.send({ createdClassB });
    })
  );
export default classBRouter;