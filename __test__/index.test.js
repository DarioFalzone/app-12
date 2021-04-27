const texto = require('../src/index');

// Exercise 01
describe('text validation', () => {

  test('this is a text',() => {
    expect(texto('')).toBe('');
  })

  test('this is not a text', () => {
    expect(texto(1)).not.toBe('');
  })

})