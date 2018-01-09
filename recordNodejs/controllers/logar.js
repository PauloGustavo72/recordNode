

module.exports = function(app) {
   	

	app.post('/autenticar', function(req, res){

		var dadosForm = req.body;

     	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
		req.assert('senha',   'Senha não pode ser vazio').notEmpty(); 
	
		var erros = req.validationErrors();

		if(erros){
			res.render('home', {validacao : erros, erros : {}});
			return;
		}


		var connection = app.bancoDeDados.dbConnection();
		var user = new app.bancoDeDados.UserDAO(connection);

		
		user.autenticar(dadosForm, function(err, results){
			console.log(results);
			if(results == ''){	

				
				res.render('home', {validacao : [], erros : 'Usuário ou senha invalidos'});

				return;
				
				
			
			}if(results){
				
				req.session.autenticado = true;


				req.session.idUser = results[0].id;
			}
			if(req.session.autenticado = true){
				
				res.redirect('menu');
			
			}
			
		});



	});

}