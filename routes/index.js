const express = require('express');
const router = express.Router();
const API = require('../services/ajax');
//unsplash clientId
const clientId = '5a419933621f55950741e4c30182c1d5f99974112a96cf0c49d8d9091cc0ba7e';

/* GET home page. */
router.get('/', (req, res, next) => {
  let imageData = {};
  let imageDataUrl = 'https://api.unsplash.com/photos?client_id=' + clientId + '';
  API.AJAX_GET(imageDataUrl).then((data) => {
    res.render('index', {
      title: 'Spoyl Project',
      imageData: data
    });
  })
  .catch((err) => {
    console.log(err);
  });

  //res.render('index', {title: 'Spoyl Project'});
});

module.exports = router;
