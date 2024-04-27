const express = require("express"); // Import express

const mongoose = require("mongoose") //Import mongoose

const PORT = 8000;


// init app
const app = express();

const Url = "mongodb://127.0.0.1/todoApp"; // connection URL created for the database
mongoose
.connect(Url)
.then(()=> console.log("Database connection successful"))
.catch((error) => console.log(error.message));



// view engine
app.set("view engine", "ejs");

// Listen server

app.listen(PORT, () =>{
    console.log(`server is runing on port ${PORT}`)
});