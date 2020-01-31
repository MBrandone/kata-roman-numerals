const convert = require('../convert');

test('display un nombre romain', () => {
  expect(convert()).toBe("le chiffre en nombre romain");
});