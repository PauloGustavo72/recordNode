

module.exports = function(app) {
   	

	app.get('/adicionaFrase', function(req, res){
		res.render('adicionaFrase');
	})



   app.post('/adicionaFrase/salvar',function(req, res) {
        
        var frase = req.body;
       res.send(frase);
    });
}