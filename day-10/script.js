//* 1. What will be the output of the following code and why?

let user = 'Alice';

function outer() {
  function inner() {
    console.log(user);
  }
  let user = 'Bob';
  inner();
}

outer(); //! output is  'Bob'. cause user = 'bob' declared then calling inner()

//* 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total); //! add total in function

//* 3. Create a function with a nested function and log a variable from the parent function.

const a = () => {
  const t = 2;
  const b = () => {
    console.log(t);
  };
  b();
};
a();

//* 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
//! no

// console.log(a);  //! Cannot access 'a' before initialization cause a not defined
// let a = 10;

function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age); //! B: Only inside showAge()

//* 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); //! -1
reduce(); //! -2 // cause counter has return func which storing data
