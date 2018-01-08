

module.exports = function(app) {
   	

	app.get('/adicionaFrase', function(req, res){

      if(req.session.autenticado){
        
        res.render('adicionaFrase', {validacao : {}, frase : {} });
	   }else{
        res.render('home', {validacao : {}});
     }
  });



   app.post('/adicionaFrase/salvar',function(req, res) {
        
        var frase = req.body;

        req.assert('frase_ingles','Frase em inglês é obrigatória').notEmpty();

        req.assert('frase_portugues','Frase em português é obrigatória').notEmpty();


        var erros = req.validationErrors();

       
        

        if(erros){

          res.render('adicionaFrase', {validacao : erros, frase : frase });
          return;
        };


        

          var connection = app.bancoDeDados.dbConnection();
          var frasesDAO = new app.bancoDeDados.FrasesDAO(connection);

          frasesDAO.adicionarFrase(req, frase, function(err, results){
       		
          res.redirect('/listaFrase');
       });
       
       
    });



   
}