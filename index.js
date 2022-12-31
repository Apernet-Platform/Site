const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 4000

require("dotenv").config()

//DB

mongoose.connect(process.env.mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "DB Connection error"))
db.once("open", function() {
    console.log("Connected to MongoDB!")
})

//Routes

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}!`)
})