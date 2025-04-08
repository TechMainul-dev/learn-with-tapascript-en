const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person, person.greet());
