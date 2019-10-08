var friendArr = require("../data/friends.js");

module.exports = function(app){
    //a GET route method that displays JSON of all friends within the index
    app.get('/api/friends', function(req,res){
      res.json(friendArr);
    });
    app.post('/api/friends', function (req, res) {
        // .post method to compare the scores of the friendArr index and user/admin's survey results
        var newFriendScoreArray = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
        var count = 0;