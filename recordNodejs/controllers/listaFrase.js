


module.exports = function(app) {
   app.get('/listaFrase',function(req, res) {
        
       var connection = app.bancoDeDados.dbConnection();
       var frasesDAO = new app.bancoDeDados.FrasesDAO(connection);

       frasesDAO.listaFrases(function(err, results){
       		res.send(results);
       });
       connection.end();
    });
}