var http = require('http'),
    coap = require('coap'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.3:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/definir', function (req, res) {
    console.log("Chamou o /definir");
    console.log("Values " + req.body.values);
    var resultado = ""
    // res.setHeader('Access-Control-Allow-Origin', '*');
    var req = coap.request('coap://192.168.0.7/' + req.body.values);
    req.on('response', function(response) {
        var resultado = response._packet.payload
        console.log("Response " + resultado);
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).send({res : resultado});
    });
    req.end();
});

app.post('/inscrever', function (req, res) {
    console.log("Chamou o /inscrever");
    console.log("E-mail " + req.body.email);
    console.log("Frequencia " + req.body.frequencia);
    var resultado = ""
    // res.setHeader('Access-Control-Allow-Origin', '*');
    var req = coap.request('coap://192.168.0.7/' + req.body.values);
    req.on('response', function(response) {
        var resultado = response._packet.payload
        console.log("Response " + resultado);
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).send({res : resultado});
    });
    req.end();
});

app.get('/receber-valores', function (req, res) {
    console.log("Chamou o /receber-valores");
    var resultado = ""
    // res.setHeader('Access-Control-Allow-Origin', '*');
    var req = coap.request('coap://192.168.0.7/obter');

    req.on('response', function(response) {
        var resultado = response._packet.payload
        console.log("Response " + resultado);
        res.setHeader('Access-Control-Allow-Origin','*')
        res.status(200).send({res : resultado});
    });
    req.end();
});

app.listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');