//* 1. Odd or Even?
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return { [number]: 'even' };
  } else {
    return { [number]: 'odd' };
  }
};
console.table([15, 20, 9].map(oddOrEven));

//* 2. Do you have a Driving License?
const hasDrivingLicense = (age) => {
  if (age >= 18) {
    return { [age]: 'You can drive' };
  } else {
    return { [age]: 'You cannot drive' };
  }
};
console.table([16, 18].map(hasDrivingLicense));

//* 3. Calculate CTC with a Bonus
const calculateCTC = (salary, bonus) => {
  const ctc = salary + (bonus / 100) * salary;
  return `Your salary is '${salary}' and per annum as a CTC '${ctc}'`;
};
console.log(calculateCTC(12300, 20));

//* 4. Write a program for the Traffic Light Simulation.
const trafficLight = (color) => {
  switch (color) {
    case 'red':
      return { [color]: 'Stop' };
    // case 'yellow':
    //   return {[color]:'Ready'};
    case 'green':
      return { [color]: 'Go' };
    default:
      return { [color]: 'Invalid color' };
  }
};
console.table(['red', 'green'].map(trafficLight));

//* 5. Create an Electricity Bill Calculator
const calculateBill = (units, discount = 0) => {
  let bill = 0;
  if (units <= 100) {
    bill = units * 5;
  } else if (units <= 200) {
    bill = units * 10;
  } else {
    bill = units * 15;
  }
  return `Your electricity bill is '${bill}' and discount is '${discount}%' and payable bill is '${
    bill - (bill * discount) / 100
  }'`;
};
console.log(calculateBill(150, 10));

//* 6. Leap Year Checker
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return { [year]: 'Leap Year' };
  } else {
    return { [year]: 'Not a Leap Year' };
  }
};
console.table([2024, 2025].map(isLeapYear));

//* 7. Max of Three Numbers
const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
const numbers = [1, 2, 3];
console.log(`Max of three numbers '${numbers}' is:`, maxOfThree(...numbers));

//* 8. Bitwise Doubling
const bitwiseDoubling = (number) => {
  return number << 1;
};
const numbersToDouble = [1, 2, 3, 4, 5];
console.log(
  `Bitwise Doubling of '${numbersToDouble}' is:`,
  numbersToDouble.map(bitwiseDoubling),
);
