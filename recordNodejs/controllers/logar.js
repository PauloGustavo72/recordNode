

module.exports = function(app) {
   	

	app.post('/autenticar', function(req, res){

		var dadosForm = req.body;

     	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
		req.assert('senha',   'Senha não pode ser vazio').notEmpty(); 
	
		var erros = req.validationErrors();

		if(erros){
			res.render('home', {validacao : erros})
			return;
		}


		var connection = app.bancoDeDados.dbConnection();
		var user = new app.bancoDeDados.UserDAO(connection);

		
		user.autenticar(dadosForm, function(err, results){
			console.log(results);
			if(results){	

				req.session.autenticado = true;

				req.session.id = results[0].id;
			
			}if(req.session.autenticado = true){
			
				res.redirect('menu');
			
			}else{
				
				res.render('home', {validacao : []});
			}
			
		});



	});

}