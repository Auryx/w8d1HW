
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