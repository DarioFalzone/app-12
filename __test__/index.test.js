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
// const suma = require('../src/index');

// describe('add validation', () => {

//   test('1 + 2 is 3', () => {
//     expect(suma(1,2)).toBe(3);
//   })

//   test('1 + (-3) is -2', () => {
//     expect(suma(1,-3)).toBe(-2);
//   })

//   test('1 + (-1) is 0', () => {
//     expect(suma(1,-1)).toBe(0);
//   })

// })

// Exercise 03
const resta = require('../src/index');

describe('subst validation', () => {

  test('1 - 2 is -1', () => {
    expect(resta(1,2)).toBe(-1);
  })

  test('1 - (-4) is 5', () => {
    expect(resta(1,-4)).toBe(5);
  })

  test('1 - (1) is 0', () => {
    expect(resta(1,1)).toBe(0);
  })

})