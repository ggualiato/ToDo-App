const axios = require('axios');

// Heroku
var urlTodoAPI = 'https://immense-island-77770.herokuapp.com/'

//local
// var urlTodoAPI = 'http://127.0.0.1:3000/'

var loginUser = async (email, password) => {
  try {
    var user = { email, password }
    var response = await axios.post(urlTodoAPI + 'users/login', user)

    return response
  } catch (e) {
    // console.log(e.response.data.message);
    throw new Error(e.response.data.message)
  }
}

var registerUser = async (email, password) => {
  try {
    var user = { email, password }
    var response = await axios.post(urlTodoAPI + 'users', user)

    return response
  } catch (e) {
    throw new Error(e.response.data.message)
  }
}

module.exports = {
  loginUser,
  registerUser
}
