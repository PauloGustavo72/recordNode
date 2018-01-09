module.exports = function(app) {
   	

	app.get('/menu', function(req, res){
		if(req.session.autenticado){
			res.render('menu');
		}else{
			res.render('home', {validacao : {}, erros : {}});
		}
		
		});
	}

