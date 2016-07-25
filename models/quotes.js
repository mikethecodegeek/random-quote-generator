var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
    quote: {type: String},
    author: { type: String }
});


var Quotes = mongoose.model('Quotes', quoteSchema);

module.exports = Quotes;
