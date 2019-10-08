// NPM Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT =  process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());