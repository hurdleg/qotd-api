var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Quotes = require('../models/quotes');

var quoteRouter = express.Router();
quoteRouter.use(bodyParser.json());

quoteRouter.route('/')
.get(function (req, res, next) {
    Quotes.find({}, function (err, quote) {
        if (err) throw err;
        res.json(quote);
    });
});

quoteRouter.route('/qotd')
.get(function (req, res, next) {
    Quotes.aggregate( [{$sample:{size:1}}], function (err, qotd) {
        if (err) throw err;
        res.json(qotd);
    });
});

module.exports = quoteRouter;
