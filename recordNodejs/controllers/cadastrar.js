module.exports = function(app) {
   	

	app.get('/cadastrar', function(req, res){

     
		  res.render('cadastrar', {validacao : {}  });
	});



	app.post('/cadastrar', function(req, res){
		var usuario = req.body;
		

		req.assert('nome', 'Nome não pode ser vazio').notEmpty();
		req.assert('username', 'Usuario não pode ser vazio').notEmpty();
		req.assert('password', 'Senha não pode ser vazio').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render('cadastrar', {validacao : erros});
			return;
		}




		var connection = app.bancoDeDados.dbConnection();
       	var userDAO = new app.bancoDeDados.UserDAO(connection);	


       	userDAO.adicionaUser(usuario, function(err, results){
       		res.redirect('/');
       	});
	});
}
