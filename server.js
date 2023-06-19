
require("dotenv").config()
const express = require('express');
const Pokemon = require('./models/pokedex.js');
const morgan = require('morgan')

const pokemonRouter = require('./controllers/pokedex.js')

// app object
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(morgan("tiny"))

app.use("/pokemon", pokemonRouter)

// initial test
app.get('/', (req, res) => {
    res.render("you hit the server js route");
});




app.listen(3000, () => {
    console.log(`Listening on Port 3000`)
})

// list of errors
// 1. Refused to apply style from '*insert file structure here*' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
// 2. Error: No default engine was specified and no extension was provided
// 3. Error: Failed to lookup view "you hit the server js route" in views directory '*insert file structure here*'
// 4. Error: Failed to lookup view "you hit the pokedex router" in views directory '*insert file structure here*'