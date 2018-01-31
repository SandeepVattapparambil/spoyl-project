const express = require('express');
const router = express.Router({mergeParams : true});
const API = require('../services/ajax');
//unsplash clientId
const clientId = '5a419933621f55950741e4c30182c1d5f99974112a96cf0c49d8d9091cc0ba7e';
let url = 'https://api.unsplash.com/photos?client_id=' + clientId + '';

/* GET search page. */
router.get('/', (req, res, next) => {
  console.log(req.params);
  API.AJAX_GET(url).then((data) =>{
    console.log(data);
  });
  res.render('search', {
    title: 'Spoyl Project',
    query: req.params.searchTerm
  });
});

module.exports = router;
