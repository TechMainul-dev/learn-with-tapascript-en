//* 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
for (let i = 1; i <= 5; i++) console.log('*'.repeat(i));

//* 2. Create Multiplication Table (Using for loop)
const multiplicationTable = (num) => {
  console.log(`Multiplication Table of ${num}_______________`);
  for (let i = 1; i <= 10; i++) console.log(`${num} * ${i} = ${num * i}`);
};
[3].map(multiplicationTable);

//* 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let sum500 = 0;
for (let i = 1; i <= 500; i++) if (i % 2 !== 0) sum500 += i;
console.log(sum500);

//* 4. Skipping Multiples of 3
let skippedArray = [];
for (let i = 1; i <= 20; i++) if (i % 3 !== 0) skippedArray.push(i);
console.log(skippedArray);

//* 5. Reverse Digits of a Number (Using while loop)
const reverseDigits = (num) => {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};

console.log(reverseDigits(6789));

//* 6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.
