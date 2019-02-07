// jshint esversion: 6
// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
};

arrow('hi');

// for practice

// make an arrow function with no block body
const myArrow = (y) => y + 1;

// {
//   return y + 1;
// }
console.log(myArrow(8));

// make a function that returns a function
const functionFatory = () => () => console.log('This is weird');

const a = functionFatory(); // or use ()() to avoid line 32
a();

const anotherFunction = functionFatory;
anotherFunction()();
