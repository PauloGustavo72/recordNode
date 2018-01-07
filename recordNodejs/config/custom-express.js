var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');




module.exports = function() {

    var app = express();
   

    app.set('view engine', 'ejs');

    


    app.use(bodyParser.urlencoded({extended : true}));
    app.use(expressValidator());

    app.use(expressSession({
        secret : 'secaoUser',
        resave : false,
        saveUninitialized : false   
    }));

    app.use(express.static('./bootstrap/'));

    consign()
         .include('controllers')
         .then('bancoDeDados')
        .into(app);

    return app;
}