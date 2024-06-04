const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute')


app.use('/', userRoute);
app.listen(3000,()=>{
    console.log("server is running ")
})