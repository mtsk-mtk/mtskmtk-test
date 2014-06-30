var fs = require('fs');



var http = require('http');
 
var server = http.createServer();
server.on('request', doRequest);

port = process.env.PORT?process.env.PORT:3000;
server.listen(port);


console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readfile('./template.html','utf-8',function(err,data){
		if(err){
			res.write('temlate read err');
		}else{
			res.write(data);
		}
		res.end();
	});
	
}