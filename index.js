let express = require('express');
let app = express();
let morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.send('Hello World! v0.0.2');
});

let port = process.env.PORT || 80;

app.listen(port, function () {
  console.log('Example app listening on port: ', port);
});