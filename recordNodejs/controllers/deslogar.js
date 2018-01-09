module.exports = function(app) {
   	

	app.get('/sair', function(req, res){
		
		if(req.session.autenticado){
			req.session.destroy(function(err){
				res.render('home', {validacao : {}, erros : {}});
			});
		}else{
			res.render('home', {validacao : {}, erros : {}});
		}
		
      
  });
}

