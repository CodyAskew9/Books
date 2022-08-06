import express from "express";

const app =express();

app.get('/api/users', (req, res){
    res.send(data.users)
})

app.get('/', (req, res)=> {
    res.send("server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});

