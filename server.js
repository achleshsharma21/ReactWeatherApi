var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});