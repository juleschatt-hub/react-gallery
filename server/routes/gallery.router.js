const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `
    SELECT * FROM gallery
    ORDER BY id ASC;
  `
  pool.query(sqlText)
    .then((dbResult) => {
      console.log('dbResult.rows: ', dbResult.rows);
      res.send(dbResult.rows);
    })
    .catch((dbError) => {
      console.log(`Server Error on GET request: ${sqlText}`, dbError);
      res.sendStatus(500);
    })
});

module.exports = router;
