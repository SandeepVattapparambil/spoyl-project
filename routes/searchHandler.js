const express = require('express');
const router = express.Router();

/* post search form. */
router.post('/', (req, res, next) => {
  let searchTerm = req.body.searchTerm;
  //redirect to search page
  res.redirect('/search/' + searchTerm +'');
});

module.exports = router;
