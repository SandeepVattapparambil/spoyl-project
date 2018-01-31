const express = require('express');
const router = express.Router({
  mergeParams: true
});
const API = require('../services/ajax');

/* GET search page. */
router.get('/', (req, res, next) => {
  let searchUrl = 'https://api.unsplash.com/search/photos?page=1&per_page=20&query=' + req.params.searchTerm + '&client_id=' + clientId + '';
  API.AJAX_GET(searchUrl).then((data) => {
      res.render('search', {
        title: 'Spoyl Project',
        query: req.params.searchTerm,
        imageData: data
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;