var http            = require('http');
var express         = require('express');
var router          = express();
var server          = http.createServer(router);
console.log(__dirname)
router.use(express.static('dist'));
process.env.NODE_PATH = __dirname;
var server_port =  5002
var server_ip_address = '0.0.0.0';
server.listen( server_port, function(){
 var addr = server.address();
  console.info('APP server listening at', addr.address + ': '+ addr.port);
});
