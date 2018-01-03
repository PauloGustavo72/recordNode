var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {

    var app = express();
   

    app.set('view engine', 'ejs');

    


    app.use(bodyParser.urlencoded({extended : true}));
    app.use(expressValidator());

    app.use(express.static('./bootstrap/'));

    consign()
         .include('controllers')
         .then('bancoDeDados')
        .into(app);

    return app;
}