﻿var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    Test.findAll().then(function (tests) {
        console.log(test);
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;