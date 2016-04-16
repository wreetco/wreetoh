// app.js
var app_info = {
	name: "wreetco website",
	version: "0.3.0"
};

// app includes
var express = require("express");
var app = express();
var methodOverride = require("method-override");
var swig = require('swig');
var fs = require('fs');

// database setup
var database = "wreetco";
var db = require("./config/db")(database);

// set the port to listen on
var port = 1337;

// set the static files location /public/img will be /img for users
//app.use(express.static(__dirname + "/public")); 
app.use('/bower_libs', express.static(__dirname + "/bower_libs")); 
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.set('view-cache', false);
swig.setDefaults({ cache: false });

// routes
require("./routes")(app); // include route handlers

// start our app at http://localhost:4321
app.listen(port);               

// let them know where to find the app
console.log(app_info.name + " " + app_info.version);
console.log("[+] App can be found at localhost:" + port + "...");
// include a quote
var quotes = JSON.parse(fs.readFileSync('./quotes.json', 'utf8'));
setTimeout(function() {
	var q = quotes[Math.floor(Math.random()*quotes.length)];
	console.log(q.quote);
}, 500);


// expose app           
exports = module.exports = app;  
