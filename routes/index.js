const express = require('express');
const router = express.Router();
const API = require('../services/ajax');

/* GET home page. */
router.get('/', (req, res, next) => {
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
});

module.exports = router;
