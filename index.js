var express  = require('express'),
    app      = express(),
    proxy    = require('express-http-proxy');

app.use('/rest', proxy('localhost:8090', {
  filter: function(req, res) {
    return req.method === 'GET';
  },
  forwardPath: function(req, res) {
    return '/rest' + require('url').parse(req.url).path;
  }
}));

app.use(express.static(__dirname + '/www'));

console.log('Listening to port 3000');
app.listen(3000);

module.exports = app;
