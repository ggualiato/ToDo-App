const express = require('express');
const bodyParser = require('body-parser')
const _ = require('lodash');

const {getTodos} = require('../services/notepad');

var router = express.Router()

var authCode

router.get('/', async (req, res) => {
  try {
    authCode = req
    console.log(authCode);

    res.render('notepad')
  } catch (e) {
    console.log(e);
  }

})

module.exports = router
