


module.exports = function(app) {
   

   app.get('/listaFrase',function(req, res) {
		if(req.session.autenticado){        
       		var connection = app.bancoDeDados.dbConnection();
       		var frasesDAO = new app.bancoDeDados.FrasesDAO(connection);

       		frasesDAO.listaFrases(req, function(err, results){
       			res.render('listaFrase', {frase : results} );
       		
       		});
       		connection.end();
    	}else{
    		res.render('home', {validacao : {}, erros : {}});
    	}
    });
}