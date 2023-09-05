const db = require('./db')
// const sendMail = require ('./mail')

// Testing numbers 
module.exports.absolute = function(number){
  return (number >= 0)? number: -number
}

// Testing strings
module.exports.greet = function(name) {
  return 'Welcome ' + name
}

// Testing arrays 
module.exports.getCurrencies = function(){
  return ['USD', 'AUD', 'EUR']
}

module.exports.getProduct = function(productId){
  return {id: productId, price: 10, category: 'fitness'}
}

module.exports.registerUser = function(username){
  if (!username) throw new Error('username is required')
  return {id: new Date().getTime(), username : username}
}
