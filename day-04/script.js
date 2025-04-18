//* 1. What will be the output of this code snippet and why?
const code = `let day = "Monday";
switch (day) {
  case "monday":
      console.log("It's the start of the week.");
      break;
  default:
      console.log("It's a normal day.");
}`;

console.log(code);
console.warn(`it's start of the week, cause case 'day === monday'`);

//* 2. Build an ATM Cash Withdrawal System
let balance = 1000;
const withdraw = (amount) => {
  if (amount <= balance && amount % 100 === 0)
    return amount + ': Withdrawal successful';
  else return amount + ':Invalid amount';
};

console.table([100, 150, 1000, 1100].map(withdraw));

//* 3. Build a Calculator with switch-case
const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 'Invalid operator';
  }
};

console.log(calculate('+', 10, 3));
console.log(calculate('-', 10, 3));
console.log(calculate('*', 10, 3));
console.log(calculate('/', 10, 3));
console.log(calculate('%', 10, 3));
