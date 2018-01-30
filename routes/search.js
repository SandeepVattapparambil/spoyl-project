const express = require('express');
const router = express.Router({ mergeParams : true });

/* GET search page. */
router.get('/', (req, res, next) => {
  console.log(req.params);
  res.render('search', {
    title: 'Spoyl Project'
  });
});

module.exports = router;
