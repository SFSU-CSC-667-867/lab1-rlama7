//jshint esversion:6

const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res + 'World')
  .then((res) => console.log(v))
  .catch((e) => console.log('I am an error; ('));

console.log('hi');
