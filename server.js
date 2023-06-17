const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokedex.js');


// INDEX
app.get('/', (req, res) => {
res.render('../views/pokedex/index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
res.render('../views/pokedex/show.ejs', { data: Pokemon[req.params.id] });
});

app.listen(3000, () => {
    console.log(`Listening on Port 3000`)
})