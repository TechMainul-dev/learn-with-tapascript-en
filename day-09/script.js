//! start TDZ for 'message' variable 😈

function sum(a, b) {
  const result = a + b;
  return result;
}
const message = 'I can do it';
//? end TDZ for 'message' variable 😀

var test = 'this is test message';
function mul(a, b) {
  const result = a * b;
  return result;
}
function calc(a, b) {
  return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
  return calc(a, b);
}

getResult(8, 5);
