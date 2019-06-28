var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect("mongodb+srv://maayan:QQqq$$44@cluster0-tiyuf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, function(err, client) {
        var dbo = client.db("closer");
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Type', 'application/json');

        dbo.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            client.close();
        });
    });
});

router.post('/add', function(req, res, next) {
    console.log(req.body);
    MongoClient.connect("mongodb+srv://maayan:QQqq$$44@cluster0-tiyuf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, function(err, client) {
        var dbo = client.db("closer");
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Type', 'application/json');

        dbo.collection("users").insertOne(req.body, function(err, result) {
            if (err) throw err;
            console.log("Number of documents inserted: " + result.insertedCount);
            res.send("Number of documents inserted: " + result.insertedCount);
            client.close();
        });

    });
});

router.post('/update', function(req, res, next) {
    //console.log(req.body);
    MongoClient.connect("mongodb+srv://maayan:QQqq$$44@cluster0-tiyuf.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }, function(err, client) {
        var dbo = client.db("closer");
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Type', 'application/json');

        var myquery = { _id : ObjectID(req.body._id) };
        var newvalues = { $set: { x_coordinate : req.body.x_coordinate, y_coordinate : req.body.y_coordinate, z_coordinate : req.body.z_coordinate } };

        console.log(ObjectID(req.body._id));
        console.log(req.body.x_coordinate);
        console.log(req.body.y_coordinate);
        console.log(req.body.z_coordinate);
        console.log(myquery);
        console.log(newvalues);

        dbo.collection("users").updateOne(myquery, newvalues, function(err, result) {
            if (err) throw err;
            console.log("Number of documents updated: " + result.modifiedCount);
            res.send("Number of documents updated: " + result.modifiedCount);
            client.close();
        });
    });
});


module.exports = router;
