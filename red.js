const express = require('express');
const redis = require('redis');
const client = redis.createClient();
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
const port = 5000;
const red_port = 6379;
const hostname = 'localhost';
app.use(bodyParser.json());

client.on("error", function (error) {
  console.log('error');
});

app.post('/red', function (req, res) {
  var response = {
    username:req.body.username,
    email:req.body.email
  };

  client.setnx(req.body.username, req.body.email, redis.print);
  client.get(req.body.username, redis.print);
  res.send('Key:' + JSON.stringify(response.username) + 'Value:' + JSON.stringify(response.email));
})

var server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
