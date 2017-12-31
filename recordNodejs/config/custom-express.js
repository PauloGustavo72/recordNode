var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {

    var app = express();
   

    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({extended : true}));

    consign()
         .include('controllers')
         .then('bancoDeDados')
        .into(app);

    return app;
}