var express = require('express');
var router = express.Router();

router.use('/quotes', require('./quotes'))
module.exports = router;