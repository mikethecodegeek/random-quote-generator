var express = require('express');
var router = express.Router();
var Quotes = require('../models/quotes');

router.get('/random', (req,res)=> {
    Quotes.find({}, '-_id -__v', (err,quotes) => {
        console.log(quotes.length)
        if(err){res.status(400).send(err)}
        var rand = quotes[Math.floor(Math.random() * quotes.length)];
        res.send(rand);
    })
})

router.post('/newquote', (req,res)=> {
    console.log(req.body)
    Quotes.create({quote: req.body.quote, author: req.body.author},(err, quote)=> {
        if (err){
            res.status(400).send(err)
        } else {
            res.status(200).send(quote);
        }
    });
})

router.get('/', (req,res)=> {
    Quotes.find({}, '-_id -__v')
        .exec((err, data) => err ? res.status(400).send(err) : res.status(200).send(data));
});


module.exports = router;
