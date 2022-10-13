var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();


https.createServer({
    cert: fs.readFileSync('mi_certificado.crt'),
    key: fs.readFileSync('mi_certificado.key')
  },app).listen(5000, function(){
     console.log('Servidor https correindo en el puerto 5000');
 });

app.get('/', function(req, res){
	res.send('Hola, estas en la pagina inicial');
	console.log('Se recibio una petición get');
});