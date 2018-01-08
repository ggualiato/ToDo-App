const express = require('express');
const bodyParser = require('body-parser')
// const axios = require('axios');
const _ = require('lodash');

const {loginUser, registerUser} = require('../services/index');

var router = express.Router()

var token

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', async (req, res) => {
  try {
    var body = _.pick(req.body, ['txtEmail', 'txtPassword'])
    var login = await loginUser(body.txtEmail, body.txtPassword)

    // console.log('----------------------->>> aqui');
    // console.log('login: ', login);
    //
    authCode = login.headers['x-auth']
    //
    // var todos = await getTodos(authCode)
    // var texts = todos.data.todos.map((todo) => todo.text)
    // var namesArray = users.map((user) => user.name)

    // console.log(texts);

    // res.render('index', {
    //   todos: texts
    // })
    // res.set('x-auth', authCode);
    res.redirect('/notepad')
    // res.render('notepad')
  } catch (e) {
    console.log('------------- Erro POST /Login -------------');
    console.log(e);
    res.render('index', {
      loginErrorMessage: e.message,
    })
  }
})

router.post('/register', async (req, res) => {
  try {
    var body = _.pick(req.body, ['txtEmail', 'txtPassword'])
    var register = await registerUser(body.txtEmail, body.txtPassword)

    // authCode = register.headers['x-auth']
    res.render('notepad')
  } catch (e) {
    console.log('------------- Erro POST /register -------------');
    console.log('Erro: ', e.message);
    res.render('index', {
      registerErrorMessage: e.message
    })
  }
})

module.exports = router
