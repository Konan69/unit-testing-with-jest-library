const lib = require('../lib')

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
 