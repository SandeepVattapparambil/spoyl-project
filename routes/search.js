const express = require('express');
const router = express.Router({
  mergeParams: true
});
const API = require('../services/ajax');
//unsplash clientId
const clientId = '5a419933621f55950741e4c30182c1d5f99974112a96cf0c49d8d9091cc0ba7e';

/* GET search page. */
router.get('/', (req, res, next) => {
  let imageData = {};
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