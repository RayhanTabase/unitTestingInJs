function stringLength(string) {
  if(string.length < 1 || string.length > 10) throw new Error('The string must be at least 1 character or at most 10 characters long')
  return string.length
}

function reverseString(string) {
  let reverse = string.split('').reverse().join('')
  return reverse
}

class Calculator {
  static add = (a, b)=> a + b;
  static subtract = (a, b) => a - b;
  static divide = (a,b) => a / b;
  static multiply = (a,b) => a * b;
}

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {stringLength, reverseString, Calculator, capitalize};
