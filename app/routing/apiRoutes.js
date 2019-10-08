var friendArr = require("../data/friends.js");

module.exports = function (app) {
    //a GET route method that displays JSON of all friends within the index
    app.get('/api/friends', function (req, res) {
        res.json(friendArr);
    });
    app.post('/api/friends', function (req, res) {
        // .post method to compare the scores of the friendArr index and user/admin's survey results
        var newFriendScoreArray = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
        var count = 0;
        //if loop for current user/choice 
        for (var i = 0; i < friendArr.length; i++) {
            var scoresDiff = 0;
            //in contrast to the existing list of friends array index
            for (var j = 0; j < newFriendScoreArray.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendArr[i].scores[j]) - parseInt(newFriendScoreArray[j])));
            }
            // then push the json the user sent to the friends Data array 
            scoresArray.push(scoresDiff);
        }
        // find best match after comparision with all friends of the array index
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        //returned data will then be pushed back to the array index
        var yourMatch = friendArr[bestMatch];
        res.json(yourMatch);
        friendArr.push(req.body);
    });

};