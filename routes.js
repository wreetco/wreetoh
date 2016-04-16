var examples = require('./app/controllers/example.js');

module.exports = function(app) {

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.render('index', {

	});	
});

};
