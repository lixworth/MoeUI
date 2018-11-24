var express = require('express');
var app = express();

app.use(express.static('doc/public'))

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000, () => console.log('MoeUI Doc listening on port 3000'));
