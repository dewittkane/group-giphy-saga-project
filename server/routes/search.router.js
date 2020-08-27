require('dotenv').config();
const axios = require('axios');
const express = require('express');


const router = express.Router();

router.get('/search', (req, res) => {
    // return all categories
    let search = req.body;
    console.log(search);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=3`)
    .then( response => {
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        res.sendStatus(500);
    })
});

module.exports = router;
