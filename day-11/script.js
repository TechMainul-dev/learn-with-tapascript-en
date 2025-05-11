//* 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); //? 1
counter(); //? 2

//* 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //? 100

//* 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
const countClick = () => {
  let count = 0;
  const btn = document.getElementById('counterButton');
  btn.addEventListener('click', function () {
    console.log(++count);
    btn.innerText = 'counter ' + count;
  });
};
countClick();

//* 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

const createMultiplier = (multiplier) => {
  return function (number) {
    console.log('multiplier is: ', number * multiplier);
  };
};

const double = createMultiplier(2);
double(10);
