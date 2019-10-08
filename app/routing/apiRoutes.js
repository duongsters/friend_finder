var friendArr = require("../data/friends.js");

module.exports = function(app){
    //a GET route method that displays JSON of all friends within the index
    app.get('/api/friends', function(req,res){
      res.json(friendArr);
    });