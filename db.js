module.exports.getCustomerSync = function(id){
  console.log('Reading a customer from MongoDB')
  return {id:id , points: 11}
}

module.exports.getCustomer = function(id){
  return new Promise((resolve, reject) => {
    console.log('Reading a customer from MongoDB')
  return {id:id , points: 11}
  })
}