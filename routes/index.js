var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
   // var indexPath = path.join(__dirname, '../views/index.html');
//res.send(`Welcome to the Random Quotes API - Here are your endpoints
//Get all quotes returned in JSON format - api/quotes/
//Get random quote from API - api/quotes/random
//`)
var indexPath = path.join(__dirname, '../views/index.html');
res.sendFile(indexPath);
});

router.get('/api', require('./api'));

module.exports = router;