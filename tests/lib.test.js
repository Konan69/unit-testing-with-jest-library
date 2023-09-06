const db= require('../db')
const lib = require('../lib')
const mail = require('../mail')

describe('absolute', ()=> {
  it('should return positive if input is positive', () => {
  const result = lib.absolute(1)
  expect(result).toBe(1)
  })

  it('should return positive if input is negative', () => {
    const result = lib.absolute(-1)
    expect(result).toBe(1)
  })
  
  it('should return zero if input is zero', () => {
    const result = lib.absolute(0)
    expect(result).toBe(0)
  })
})

describe('greet', () =>{
  it('should return the greeting message', () =>{
    const result = lib.greet('Konan');
    expect(result).toMatch(/Konan/)
    expect(result).toContain('Konan')
  })
})

describe('getCurrencies', () =>{
  it('should return supported currencies', () =>{
    const result = lib.getCurrencies()
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
  })
})

describe('getProduct', () =>{  
  it('should return product with given id', () =>{
    const result = lib.getProduct(1)
    expect(result).toMatchObject({id: 1, price: 10})
    expect(result).toHaveProperty('id', 1)
  })
})

describe('registerUser', () =>{
  it('should reject if username is falsy', () =>{ 
    const args = [null, undefined, NaN, '', 0, false]
    args.forEach( a => {
      expect(() => {lib.registerUser(a)}).toThrow()
    }) 
  })
  it('should a user object if valid username is passed', () =>{ 
    const result = lib.registerUser('Konan')
    expect(result).toMatchObject({username : "Konan"})
    expect(result.id).toBeGreaterThan(0)
  })
})
 
describe("fizzBuzz", () => {
  it('should reject if input is not a number',() => {
    expect(() => {lib.fizzBuzz("3")}).toThrow()
    expect(() => {lib.fizzBuzz(null)}).toThrow()
    expect(() => {lib.fizzBuzz(undefined)}).toThrow()
    expect(() => {lib.fizzBuzz({})}).toThrow()
  })
  it('should return fizzbuzz if it can be divisible by both 5 and 3', ()=>{
    const result = lib.fizzBuzz(15)
    expect(result).toEqual('Fizzbuzz')
  })
  it('should return Fizz if it can only be divisible by 3', ()=>{
    const result = lib.fizzBuzz(3)
    expect(result).toEqual('Fizz')
  })
  it('should return Buzz if it can only be divisible by 5', ()=>{
    const result = lib.fizzBuzz(5)
    expect(result).toEqual('Buzz')
  })
})

describe('applyDiscount', ()=> {
  it('should apply a 10% discount if customer has more than 10 points', () => {
  db.getCustomerSync = function(customerId) {
      console.log('fake reading customer')
      return {id:customerId, points:20}
    }
    const order = {customerId: 1, totalPrice: 10}
    lib.applyDiscount(order)
    expect(order.totalPrice).toBe(9)
    
}) 
})

describe('notifyCustomer', () =>{
  it('should send an email to customer', ()=>{
    db.getCustomerSync = function(customerId){
      return {email:'user email'}
    }

    let mailSent = false
    mail.send = function(email, message){
      mailSent =true
    }

    lib.notifyCustomer({ customerId: 1})

    expect(mailSent).toBe(true)
  })
})
