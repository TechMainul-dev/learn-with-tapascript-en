//* 1. Write a Function to Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) =>
  `Celsius is '${celsius}' and This is '${(celsius * 9) / 5 + 32}' Fahrenheit`;
console.log(celsiusToFahrenheit(35));

//* 2. Create a Function to Find the Maximum of Two Numbers
const findMax = (...numbers) => {
  let numbArr = numbers.sort((a, b) => a - b);
  return `[${numbers}] Maximum of Two Numbers is ${numbArr.slice(-2)}`;
};

console.log(findMax(1, 2, 13, 4, 8, 5, 6));

//* 3. Function to Check if a String is a Palindrome
const isPalindrome = (str) => {
  str = str.replace(/\W/g, '').toLowerCase();
  return str == str.split('').reverse().join('')
    ? `+ '${str}' is a Palindrome`
    : `- '${str}' is not a Palindrome`;
};

console.table(['level', 'levels', 'A car a man a maraca'].map(isPalindrome));

//* 4. Write a Function to Find Factorial of a Number
const findFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;
  return `!${num} factorial is ${fact}`;
};

console.table([1, 2, 3, 4, 5].map(findFactorial));

//* 5. Write a function to Count Vowels in a String
const countVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  newStr = str.replace(/\W/g, '').toLowerCase();
  for (let i = 0; i < newStr.length; i++)
    if (vowels.includes(newStr[i])) count++;

  return `Count of Vowels in '${str}' is ${count}`;
};
console.log(countVowels('Hello World'));

//* 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
const capitalizeWords = (str) => {
  const newWords = str.toLowerCase();
  return `'${str}' capitalize words is: '${
    newWords.slice(0, 1).toUpperCase() + newWords.slice(1)
  }'`;
};

console.log(capitalizeWords('helLo WoRld'));

//* 7. Use an IIFE to Print “Hello, JavaScript!”
(function () {
  console.log('Hello, JavaScript!');
})();

//* 8. Create a Simple Callback Function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const calculate = (num1, num2, operation) => {
  return operation(num1, num2);
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));

//* 9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
  f1();
}
f2();

//* 10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
  f1();
}
f2();
f3();
f1();
