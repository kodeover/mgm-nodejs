var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var productsRouter = require('./routes/productsRouter');

var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/products', productsRouter);

app.get('/', function (req, res, next) {
    res.render('index.html');

});

app.post('/send-message', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'json/application'});
    var name = req.body.name,
        email = req.body.email,
        phone = req.body.phone,
        message = req.body.message;

    var isError = false;
    var params = {};

    if (name && validateName(name)) {
        params['name'] = true;
    } else {
        params['name'] = false;
        isError = true;
    }

    if (email && validateEmail(email)){
        params['email'] = true;
    } else {
        params['email'] = false;
        isError = true;
    }

    if (phone && validatePhone(phone)) {
        params['phone'] = true;
    } else {
        params['phone'] = false;
        isError = true;
    }

    if (message){
        params['message'] = true;
    } else {
        params['message'] = false;
        isError = true;
    }

    params['isError'] = isError;

    params_json = JSON.stringify(params);

    res.end(params_json);


    function validateName(name) {
        var re = new RegExp("^([a-zA-Z _]{3,})$");
        return (re.test(name));
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone){
        var re = /^[0-9]+$/;
        return re.test(phone);
    }
});

// app.listen(port, hostname, function () {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});