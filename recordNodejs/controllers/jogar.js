
module.exports = function(app) {
   	
	 var respostaCerta = '';

	app.get('/jogar', function(req, res){
    if(req.session.autenticado){		
		    var connection = app.bancoDeDados.dbConnection();
        var frasesDAO = new app.bancoDeDados.FrasesDAO(connection);
        

        frasesDAO.buscaPorId( req.session.idUser , function(error, results){
        	
        	respostaCerta = results[0].frase_portugues;

          
          if(req.session.resultadoResposta == true){
            req.session.resultadoResposta = 'acertou';
          
          }else if(req.session.resultadoResposta == undefined){
            req.session.resultadoResposta = '';
          
          }else{
            req.session.resultadoResposta = 'errou';
          }

           
        	
        	res.render('jogar', {frase : results, req : req.session.resultadoResposta  });	
        });
    }else{
        res.render('home', {validacao : {}, erros : {}});
    }    
		
      	
  });



	app.post('/comparar', function(req, res){
		
    if(req.session.autenticado){
  		    var frase = req.body;
         
          
          if(frase.frase_portugues == respostaCerta){
            req.session.resultadoResposta = true;
  			    res.redirect('/jogar');
  			    return;
  			 
  		    }else{
            req.session.resultadoResposta = false;
      			res.redirect('/jogar' );
      			return;
  		    }
		}else{
        res.render('home', {validacao : {}, erros : {}});
    }
      	
  });

}


