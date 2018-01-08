const axios = require('axios');

// Heroku
var urlTodoAPI = 'https://immense-island-77770.herokuapp.com/'

//local
// var urlTodoAPI = 'http://127.0.0.1:3000/'

var getTodos = async (authCode) => {
  try {
    var response = await axios({
      method: 'get',
      url: urlTodoAPI + 'todos',
      headers: {
        'x-auth': authCode
      }
    })

    return response
  } catch (e) {
    return e
  }
}

module.exports = {
  getTodos
};
