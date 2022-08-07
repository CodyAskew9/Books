import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app =express();
mongoose.connect('mongodb://localhost/Books')
app.get('/', (req, res)=> {
    res.send("server is ready");
});
app.use('/api/users', userRouter);

app.use((err, req, res, next)=> {
    res.status(500).send({message: err.message})
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});

