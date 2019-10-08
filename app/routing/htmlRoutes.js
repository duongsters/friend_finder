//NPM Path Dependency
var path = require('path');
//---------ROUTING----------//
module.exports = function(app){ 
// HTML .GET request method is used whenever the user/admin visits the survey html route and the function in line 6 would then run 
    app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    app.use(function(req, res){
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
    
    };