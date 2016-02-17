var PRODUCTION = process.env.NPM_CONFIG_PRODUCTION,
    PORT = process.env.PORT || 3000;

var express  = require('express'),
    app      = express(),
    proxy    = require('express-http-proxy');

var generateFakeList = function generateFakeList() {
  var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
  var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
  var people = [];


  for (var i = 1; i <= 10; i++) {
    var namePos = Math.floor((Math.random() * name.length));
    var surnamePos = Math.floor((Math.random() * surname.length));

    var person = {
      id: i,
      name: name[namePos] + " " + surname[surnamePos],
      disclosableInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
        "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
        "onsequat."
    };

    people.push(person);
  }

  return people;
};

/**
  * Proxy to redirect requests in /rest/people to the Java server running on port 8090
  * and avoid CORS problems.
  */
app.use('/rest', proxy('localhost:8090', {
  filter: function(req, res) {
    return req.method === 'GET';
  },
  forwardPath: function(req, res) {
    return '/rest' + require('url').parse(req.url).path;
  }
}));

app.get('/api/people', function(req, res) {
   res.send(generateFakeList());
});

var staticDir = PRODUCTION ? '/build' : '/www';

console.log('Using ' + staticDir + ' ' + PRODUCTION + ' ' + process.env.NPM_CONFIG_PRODUCTION);
app.use(express.static(__dirname + staticDir));

console.log('Listening to port ' + PORT);
app.listen(PORT);

module.exports = app;
