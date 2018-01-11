 var mysql  = require('mysql');

 function createDBConnection(){
   	var url = process.env.CLEARDB_DATABASE_URL;
   	var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true);


    return mysql.createConnection({
                host:grupos[3],
                user:grupos[1],
                password:grupos[2],
                database:grupos[4]
          });

}

module.exports = function(){
	return createDBConnection;
}