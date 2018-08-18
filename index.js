const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

var app = new express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set("views", "views")
app.set("partials", "views/partials")
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home', {title: "Home Page"});
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About - Up & to the Right"});
});

app.post('/hours', (req, res) => {
  username = req.body.username;
  res.render('hours', {title: "Enter Hours", username: username});
});

app.post('/submit', (req, res) => {
  res.render('submit', {title: "Hours successfully submitted!"})
});

app.listen(port, () => {
  console.log('The server has started!');
});
