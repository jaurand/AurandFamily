var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    global.db.Test.findAll().then(function (tests) {
        res.json(tests);
    });
});

module.exports = router;