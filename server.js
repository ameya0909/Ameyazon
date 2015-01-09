var express			= require('express');
var app				= express();
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var format			= require('util').format;
var MongoJS			= require("mongojs");

var db = MongoJS.connect("mongodb://localhost:27017/ecom");
var port = process.env.PORT || 7000;
var ObjectId = MongoJS.ObjectId;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
app.get('/api/productslist', function(req, res) {
	db.collection("products").find(function(err, products) {
		if( err || !products) {
			res.send(err);
		} else {
			res.json(products);
		}
	});
});

app.get('/store/:products', function(req, res) {
	db.collection(req.params.products).find(function(err, products) {
		if( err || !products) {
			res.send(err);
			console.log("\nNo Products Found");
		} else {
			res.json(products);
		}
	});
});

app.get('/store/:products/:id', function(req, res) {
	db.collection(req.params.products).find({_id : ObjectId(req.params.id)}, function(err, ids) {
		if( err || !ids) {
			res.send(err);
			console.log("\nNo ID Found");
		} else {
			res.json(ids);
		}
	});
});

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

app.listen(port);
console.log('Application Running on port ' + port);
exports = module.exports = app;
