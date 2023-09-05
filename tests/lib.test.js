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