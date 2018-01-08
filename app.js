const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const axios = require('axios');
const _ = require('lodash');

const index = require('./routes/index')
const notepad = require('./routes/notepad');

const port = process.env.PORT || 3000

var app = express()

var authCode, userId

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use('/', index)
app.use('/notepad', notepad)

// app.get('/login', (req, res) => {
//   res.render('login')
// })
//
// app.post('/login', async (req, res) => {
//   try {
//     var body = _.pick(req.body, ['txtEmail', 'txtPassword'])
//     var user = {
//       email: body.txtEmail,
//       password: body.txtPassword
//     }
//     var login = await axios.post(urlTodoAPI + 'users/login', user)
//
//     authCode = login.headers['x-auth']
//
//     var todos = await getTodos(authCode)
//     var texts = todos.data.todos.map((todo) => todo.text)
//     // var namesArray = users.map((user) => user.name)
//
//     console.log(texts);
//
//     res.render('index', {
//       todos: texts
//     })
//   } catch (e) {
//     console.log('------------- Erro POST /Login -------------');
//     console.log(e.response.data);
//
//     res.render('login', {
//       loginErrorMessage: e.response.data.message,
//     })
//   }
// })
//
// app.post('/logout', async (req, res) => {
//   try {
//     var logout = await axios({
//       method: 'delete',
//       url: urlTodoAPI + 'users/me/token',
//       headers: {
//         'x-auth': authCode
//       }
//     })
//
//     res.render('login')
//   } catch (e) {
//     console.log('------------- Erro POST /logout -------------');
//     console.log('Erro: ', e);
//   }
// })
//
// app.post('/register', async (req, res) => {
//   try {
//     var body = _.pick(req.body, ['txtEmail', 'txtPassword'])
//     var user = {
//       email: body.txtEmail,
//       password: body.txtPassword
//     }
//     var register = await axios.post(urlTodoAPI + 'users', user)
//
//     if (register.status === 200) {
//       authCode = register.headers['x-auth']
//
//       res.render('index')
//     }
//   } catch (e) {
//     console.log('------------- Erro POST /register -------------');
//     console.log('Erro: ', e.response.data.message);
//     res.render('login', {
//       registerErrorMessage: e.response.data.message
//     })
//   }
// })
//
// app.post('/createtodo', async (req, res) => {
//   var message
//
//   try {
//     var body = _.pick(req.body, ['txtTodo'])
//     var todo = {
//       text: body.txtTodo
//     }
//     var doc = await axios({
//       method: 'post',
//       url: urlTodoAPI + 'todos',
//       headers: {
//         'x-auth': authCode
//       },
//       data: todo
//     })
//
//     message = 'Succesfull'
//   } catch (e) {
//     console.log('------------- Erro POST /createtodo -------------');
//     console.log(e.response.data.errors);
//
//     message = 'Failed'
//   }
//   res.render('index', {
//     messages: message
//   })
// })
//
// app.get('/notepad', (req, res) => {
//   res.render('index')
// })
//
// app.get('/teste', async (req, res) => {
//   try {
//     var todos = await getTodos(authCode)
//     console.log(todos.data);
//   } catch (e) {
//     console.log('------------- Erro GET /teste -------------');
//     console.log(e);
//   }
// })
//


app.listen(port, () => {
  console.log(`ToDo-App is running on port ${port}`);
})
