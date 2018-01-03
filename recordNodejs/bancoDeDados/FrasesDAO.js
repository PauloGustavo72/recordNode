


function FrasesDAO(connection){
	this._connection = connection;
}

FrasesDAO.prototype.listaFrases = function(callback){
	this._connection.query('select * from frases', callback);
}


FrasesDAO.prototype.adicionarFrase = function(frase, callback){
	this._connection.query('insert into frases set ? ', frase, callback);
	
}



module.exports = function(){
	return FrasesDAO;
}