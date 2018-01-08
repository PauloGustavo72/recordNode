
module.exports = function(app) {
   	
	 var respostaCerta = '';

	app.get('/jogar', function(req, res){
		
		    var connection = app.bancoDeDados.dbConnection();
        var frasesDAO = new app.bancoDeDados.FrasesDAO(connection);
        

        frasesDAO.buscaPorId( req.session.idUser , function(error, results){
        	
        	respostaCerta = results[0].frase_portugues;

          console.log(req.session.resultadoResposta );
          
          if(req.session.resultadoResposta){
            req.session.resultadoResposta = 'acertou';
          }else if(req.session.resultadoResposta = 'undefined'){
            req.session.resultadoResposta = '';
          }else{
            req.session.resultadoResposta = 'errou';
          }

           
        	
        	res.render('jogar', {frase : results, validacao : req.session.resultadoResposta  });	
        });

		
      	
  });



	app.post('/comparar', function(req, res){
		
		var frase = req.body;

		/*
		req.assert('frase_ingles','Frase em inglês é obrigatória').notEmpty();

        req.assert('frase_portugues','Frase em português é obrigatória').notEmpty();


        var erros = req.validationErrors();


        if(erros){

          res.render('adicionaFrase', {validacao : erros, frase : frase });
          return;
        };*/

        
        if(frase.frase_portugues == respostaCerta){
          req.session.resultadoResposta = true;
			    res.redirect('/jogar');
			    return;
			 
		    }else{
          req.session.resultadoResposta = false;
    			res.redirect('/jogar' );
    			return;
		}
		
      	
  });

}


