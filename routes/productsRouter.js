var express = require('express');
var mongoose = require('mongoose');

//Require DB Models
var Products = require('../models/products');

// Connect to MongoDB
var db_url = 'mongodb://localhost:27017/mgmdb';
mongoose.connect(db_url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var productsRouter = express.Router();

productsRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get(function (req, res, next) {
     Products.find({}, function (err, products) {
            res.end(JSON.stringify(products));
            console.log(products);
        });

    })

    .post(function (req, res, next) {

        var modelId = req.body.modelId;

        var category = req.body.category;
        var label = req.body.label;
        var description = req.body.description;
        var dimensions = req.body.dimensions;
        var motto = req.body.motto;

        //create new product
        Products.create({
            "modelId": modelId,
            "category": category,
            "label": label,
            "description": description,
            "dimensions": dimensions,
            "motto": motto
        }, function (err, product) {
            if (err) throw err;
            console.log('>>>>>> Product created !')
            console.log(product);
            console.log('');
        });

        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {

        var id = req.body.id;

        Products.remove({ _id: id }, function (err) {
            if (err) return handleError(err);
            console.log("remove")
        });
        res.end("I delete de product with id" + id)
    })

    .put(function (req, res, next) {

        var id = req.body.id;
        var update = req.body.update;

        Products.findOneAndUpdate({_id: id}, update , function (err) {
            if (err) return handleError(err);
             console.log("update: " + update)
            console.log("Typeof: " + typeof update)
        });
        res.end("Updated product with id "+ id);
    });


module.exports = productsRouter;