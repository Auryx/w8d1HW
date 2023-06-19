// dependencies
const express = require("express")
const Pokemon = require("../models/pokedex")

// router obj

const router = express.Router()

// routes w/ router

router.get('/', (req, res) => {
    res.render('you hit the pokedex router', { data: Pokemon });
})

// export the router
module.exports = router