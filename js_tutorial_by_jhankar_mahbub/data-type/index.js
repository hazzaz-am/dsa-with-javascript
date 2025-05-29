// Javascript Parse Practice

const number = '20';
console.log(parseInt(number) + 10); // 30

const decimal = '3.14159';
console.log(parseInt(decimal)); // 3

const makeNumber = 'string';
console.log(parseInt(makeNumber)); // NaN

const num1 = 3.456;
const num2 = 2.789;
const total = num1 + num2

const fixedNum = total.toFixed(2)
console.log(parseFloat(fixedNum)); // 6.25

const num3 = '56.78'
const num4 = '12.34'
const total2 = parseFloat(num3) + parseFloat(num4);

const parsed = total2.toFixed(2)

console.log(parseFloat(parsed)); // 69.12

const number1 = '10.5678'
const number2 = '5.4321'
console.log(parseFloat(parseFloat(number1).toFixed(1))) // 10.6
console.log(parseFloat(parseFloat(number2).toFixed(1))) // 5.4

const number3 = '42.456789754'
console.log(parseFloat(parseFloat(number3).toFixed(3))) // 42.457