const express = require("express")
const app = express()
const port = 4000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/app", (req, res) => {
    res.render("app")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})