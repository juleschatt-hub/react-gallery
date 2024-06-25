const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let {id} = req.params;
  const sqlText = `UPDATE "gallery" SET "likes" = "likes" +1 Where "id" = $1;`;

  pool.query(sqlText, [id])
    .then((dbResult) => {
      console.log('Hitting put route', dbResult);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`error with like put route query ${sqlText}`, err);
    })
});

// GET /gallery
router.get('/', (req, res) => {
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
