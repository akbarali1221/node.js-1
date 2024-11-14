const express = require("express");
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const fs = require("fs")
const path = require("path")





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressLayouts)

app.set("views", path.join(__dirname, "./frontend"))
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))



app.use(require("./frontend/router/index"))

app.use(require("./backend/router/userRouter"))




const port = 5001;
app.listen(port, () => {
    console.log("Server ishlayapti", new Date().toLocaleString())
})