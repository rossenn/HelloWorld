const express = require('express');
const app = express();
const nodeCleanup = require('node-cleanup');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')

// configurable for each deployment
const dbUrl = require('../dbUrl');

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

var db;
MongoClient.connect(dbUrl).then(function(database) {
	db = database;
	nodeCleanup(function (exitCode, signal) {
	    db.close();
	    console.log('exited express after cleaning up database connection');
	});	
	console.log('RESTful API server started on port: ' + port);
}).catch(function(err) {
	console.log('Cannot connect to DB because: ' + err);
});


app.post('/api/people', function (req, res) {
	const response = db.collection('person').insertOne(req.body);
	res.send(response);
});

app.get('/api/people', function (req, res) {
	const response = db.collection('person').find().toArray();
	res.send(response);	
});

