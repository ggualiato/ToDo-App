const express = require('express');
const hbs = require('hbs');
var bodyParser = require('body-parser')

const port = process.env.PORT || 3000

var app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index.hbs')
})

app.get('/login', (req, res) => {
  res.render('login.hbs')
})

app.post('/login', (req, res) => {
  console.log('Dados: ', req.body);
  res.render('login.hbs')
})

app.post('/createTodo', (req, res) => {
  console.log('foi');
  console.log('Dado: ', req.body);
  res.render('index.hbs')
})

app.listen(port, () => {
  console.log(`ToDo-App is running on port ${port}`);
})
