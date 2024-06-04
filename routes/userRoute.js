const express = require('express');
const userRoute = express.Router();
const userDetails = {
    name : "rishal",
    age: "20"
}
userRoute.get('/',(req,res) => {
    res.json(userDetails);
})

module.exports = userRoute