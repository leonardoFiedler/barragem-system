var http = require('http'),
    coap = require('coap'),
    express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log("Chamou o /");
    var resultado = ""
    var req = coap.request('coap://192.168.0.7/1|0|1');
    req.on('response', function(response) {
        //res.pipe(process.stdout)
        /*res.on('end', function() {
            //process.exit(0)
        }) */
        resultado = response;
        res.status(200).send({result : resultado})
    });
    req.end();
    console.log("Resultado do COAP " + resultado);
});

app.get('/receber-valores', function (req, res) {
    console.log("Chamou o /receber-valores");
    var resultado = ""
    /*var req = coap.request('coap://192.168.0.7/obter');

    req.on('response', function(response) {
        var resultado = response._packet.payload
        console.log("Response " + pau);
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).send({res : resultado});
    });
    req.end(); */

    res.status(200).send({res : "pau"});
});

app.listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');