


function UserDAO(connection){
	this._connection = connection;
}





UserDAO.prototype.adicionaUser = function(usuario, callback){
	this._connection.query('insert into user set ? ', usuario, callback);
	
}





UserDAO.prototype.autenticar = function(usuario, callback){
	
	this._connection.query( 'SELECT * FROM  user WHERE username = ? ' , [usuario.usuario], callback);
	


}

 







module.exports = function(){
	return UserDAO;
}