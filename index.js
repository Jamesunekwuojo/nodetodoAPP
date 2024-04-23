const express = require("express");

const PORT = 8000;

// init app
const app = express();

// view engine
app.set("view engine", "ejs");

// Listen server

app.listen(PORT, () =>{
    console.log(`server is runing on port ${PORT}`)
});