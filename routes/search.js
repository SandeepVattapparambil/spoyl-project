const express = require('express');
const router = express.Router();

/* GET search page. */
router.get('/', (req, res, next) => {
  let query = req.params.query || null;
  res.render('search', {
    title: 'Spoyl Project',
    query: query
  });
});

module.exports = router;