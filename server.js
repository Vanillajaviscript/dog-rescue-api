require('dotenv').config();
require("./config/dataBase")
const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("root directory")
})


app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`)
})