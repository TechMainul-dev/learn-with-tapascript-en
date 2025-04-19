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

//* 4. Pay for your movie ticket
const movieTicket = (age) => {
  if (age < 18) {
    return { [age]: '$3' };
  } else if (age >= 18 && age <= 60) {
    return { [age]: '$10' };
  } else if (age > 60) {
    return { [age]: '$8' };
  }
};

console.table([12, 18, 65].map(movieTicket));

//* 5. Horoscope Sign Checker
const horoscope = (month) => {
  month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  switch (month) {
    case 'January':
    case 'February':
    case 'March':
    case 'April':
      return { [month]: 'Aries' };
    case 'May':
    case 'June':
      return { [month]: 'Taurus' };
    case 'July':
    case 'August':
    case 'September':
      return { [month]: 'Leo' };
    case 'October':
    case 'November':
    case 'December':
      return { [month]: 'Sagittarius' };
    default:
      return { [month]: 'Invalid month' };
  }
};

console.table(['March', 'april', 'may'].map(horoscope));

//* 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
const triangle = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) {
    return 'Equilateral Triangle';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'Isosceles Triangle';
  } else {
    return 'Scalene Triangle';
  }
};

console.log(triangle(2, 2, 2));
console.log(triangle(2, 2, 3));
console.log(triangle(2, 3, 4));