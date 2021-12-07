const {stringLength, reverseString, Calculator, capitalize } = require('./main');

test('checks length of the string book equals 4', () => {
  expect(stringLength('book')).toBe(4);
});

test('checks error thrown on empty string', () => {
  expect(() => stringLength('')).toThrowError('The string must be at least 1 character or at most 10 characters long');
});

test('checks error thrown on a string with characters above 10 characters', () => {
  expect(() => stringLength('bookbookbookbook')).toThrowError('The string must be at least 1 character or at most 10 characters long');
});

test('checks reverse of book equals koob', () => {
  expect(() => reverseString('book').toEqual('koob'));
});


describe('Check the methods of the Calculator class', () => {

  test('add two numbers; 6 and 5', () => {
    expect(() => Calculator.add(6,5).toEqual(11));
  });

  test('substract the second number from the first; 6 and 5', () => {
    expect(() => Calculator.subtract(6,5).toEqual(1));
  });

  test('divide the second number from the first; 10 and 2', () => {
    expect(() => Calculator.divide(10,2).toEqual(5));
  });

  test('multiply two numbers; 10 and 2', () => {
    expect(() => Calculator.multiply(10,2).toEqual(20));
  });
});

test('Capitalize first character of a string', () => {
  expect(() => capitalise('apple').toBe('Aspple'));
});
