const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);

  let newFav = req.body;
  const queryText = `INSERT INTO "favorites" ("image_url")
  VALUES ($1)`;

  const queryValues = [
    newFav.image_url
  ]
  pool.query(queryText, queryValues).then(() => {res.sendStatus(201); }).catch((error) => {
    console.log('Error completing favorite query', error);
    res.sendStatus(500);
  })


});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
