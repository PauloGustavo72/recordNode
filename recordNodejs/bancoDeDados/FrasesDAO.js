


function FrasesDAO(connection){
	this._connection = connection;
}

FrasesDAO.prototype.listaFrases = function(req, callback){
	this._connection.query('select * from frases where user_id = ?', [req.session.idUser], callback);
}


FrasesDAO.prototype.adicionarFrase = function(req, frase, callback){
	var result = {frase_ingles : frase.frase_ingles, frase_portugues : frase.frase_portugues, user_id : req.session.idUser}
	this._connection.query('insert into frases SET ?',result , callback);
	
}


FrasesDAO.prototype.buscaPorId = function(id, callback){
	
	this._connection.query('select * from frases where user_id = ? order by rand() limit 1', [id], callback);
	
}


FrasesDAO.prototype.frasesAleatorioas = function(req, id, callback){
	
	this._connection.query('select * from frases where id != ? and user_id = ? order by rand() limit 2' , [id, req.session.idUser], callback);
	
}


module.exports = function(){
	return FrasesDAO;
}