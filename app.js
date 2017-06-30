var express = require('express');
var bodyParser = require('body-parser');
var  mongoose = require('mongoose');

var books = require('./routes/api/books');
var customers = require('./routes/api/customers');
var transactions = require('./routes/api/transactions');

var app = express();

mongoose.connect('mongodb://localhost/mongoose-crud');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/api/books', books);
app.use('/api/customers', customers);
app.use('/api/transactions', transactions);

app.listen(3000, () => console.log('Listening on port 3000..'));
