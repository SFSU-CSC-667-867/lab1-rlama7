// jshint esversion:6

// next event in the queue
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));

console.log('world');
