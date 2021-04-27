// Exercise 01
// const texto = require('../src/index');

// describe('text validation', () => {

//   test('this is a text',() => {
//     expect(texto('')).toBe('');
//   })

//   test('this is not a text', () => {
//     expect(texto(1)).not.toBe('');
//   })

// })

// Exercise 02
const suma = require('../src/index');

describe('add validation', () => {

  test('1 + 2 is 3', () => {
    expect(suma(1,2)).toBe(3);
  })

  test('1 + (-3) is -2', () => {
    expect(suma(1,-3)).toBe(-2);
  })

  test('1 + (-1) is 0', () => {
    expect(suma(1,-1)).toBe(0);
  })

})