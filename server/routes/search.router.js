require('dotenv').config();

const axios = require('axios');
const express = require('express');

router.get('/', (req,res) => {
    let search = req.body;
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=3`)
    .then( response => {
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        res.sendStatus(500);
    })
})