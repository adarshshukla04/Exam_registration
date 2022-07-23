
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

//Routes
const regForm = require("./routes/register");

//My Routes
app.use('/register', regForm);


app.listen(port, ()=>{
    console.log("Server is running:)");
});

app.get("/", (req, res)=>{
    res.render("index.ejs");
});
