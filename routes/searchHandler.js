const express = require('express');
const router = express.Router();

/* GET search page. */
router.post('/', (req, res, next) => {
  let searchQuery = req.body.query;
  res.redirect('/search/'+searchQuery+'');
});

module.exports = router;
