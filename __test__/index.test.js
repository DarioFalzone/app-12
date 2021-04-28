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
// const resta = require('../src/index');

// describe('subst validation', () => {

//   test('1 - 2 is -1', () => {
//     expect(resta(1,2)).toBe(-1);
//   })

//   test('1 - (-4) is 5', () => {
//     expect(resta(1,-4)).toBe(5);
//   })

//   test('1 - (1) is 0', () => {
//     expect(resta(1,1)).toBe(0);
//   })

// })

// Exercise 04
// const multiplicacion = require('../src/index');

// describe('multiplication validation', () => {

//   test('2 x 1 is 2', () => {
//     expect(multiplicacion(2,1)).toBe(2);
//   })

//   test('2 x -1 is -2', () => {
//     expect(multiplicacion(2,-1)).toBe(-2);
//   })

//   test('2 x 0 is 0', () => {
//     expect(multiplicacion(2,0)).toBe(0);
//   })

//   //Otra forma que se me ocurrio
//   test('2 x 0 is 0', () => {
//     expect(multiplicacion(2,0)).toBeFalsy();
//   })

//   test('factorA is not a number', () => {
//     expect(multiplicacion('stringExample',0)).toBe(NaN);
//   })

//   test('factorB is not a number', () => {
//     expect(multiplicacion(0,'stringExample')).not.toBe(Number);
//   })
// })

// Exercise 05
// Acá empece a practicar los matchers un poquito mas a fondo
// const division = require('../src/index');

// describe('division validation', () => {
//   test('division not posible', () => {
//     expect(division).not.toBeNull();
//     expect(division).toBeDefined();
//     expect(division(10,0)).toBeTruthy();
//   })

//   test('division posible', () => {
//     expect(division).not.toBeNull();
//     expect(division).toBeDefined();
//     expect(division(0,10)).toBeFalsy();
//   })
// })

// Exercise 06
// const tableMultiplication = require('../src/index');

// describe('tabla validator', () => {
//   test('multiplicator is undefined', () => {
//     expect(tableMultiplication).not.toBeNull();
//     expect(tableMultiplication).toBeDefined();
//     expect(tableMultiplication(4)).toEqual(
//      [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
//     );
//   })

//   test('example with multiplicador and multiplicando declarated', () => {
//     expect(tableMultiplication).not.toBeNull();
//     expect(tableMultiplication).toBeDefined();
//     expect(tableMultiplication(1,5)).not.toEqual(
//      [0, 4, 8, 64, 35, 20]
//     );
//   })

//   test('example negative', () => {
//     expect(tableMultiplication).not.toBeNull();
//     expect(tableMultiplication).toBeDefined();
//     expect(tableMultiplication(2,8)).not.toEqual(
//      [0, 4, 8, 64, 35, 20, 95, 50, 40]
//     );
//   })
// })

// Exercise 07
// const potencia = require('../src/index');

// describe('potencia validator', () => {
//   test('-2 to the power of 3 should be -8', () => {
//     expect(potencia(-2,3)).toBe(-8);
//   });

//   test('-4 to the power of 2 will not be 20', () => {
//     expect(potencia(-4,2)).not.toBe(20);
//   });

//   test('-4 to the power of 2 will not be 20', () => {
//     expect(potencia(-4,2)).not.toBe(20);
//   });

//   test('this function exists', () => {
//     expect(potencia).toBeDefined();
//   });
// })

// Exercise 08
const anidada = require('../src/index');

describe('Function anidada validator', () => {
  test('The sum of the squares of -1 and 6 should be 37', () => {
    expect(anidada(-1,6)).toEqual(37);
  });

  test('this function exists', () => {
    expect(anidada).toBeDefined();
  });

  test('The sum of the squares of 10 and -65 will not be 40', () => {
    expect(anidada(10,-65)).not.toEqual(37);
  });
})

// Exercise 09
// const tableMultiplication = require('../src/index');

// describe('', () => {

// })