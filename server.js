// NPM Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT =  process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers...will direct the port server to the route the apiRoutes & htmlRoutes files
//These 2 route files will direct the server in how to respond to user's GET and REQUEST data
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlROutes")(app);