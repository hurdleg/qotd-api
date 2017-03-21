// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quoteSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Quotes = mongoose.model('Quote', quoteSchema);

// make this available to our Node applications
module.exports = Quotes;
