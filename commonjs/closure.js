/**
 * Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope.
 */

// able to remember and access it's lexical scope
//when that function executing outside it's lexical scope

// function test() {
//   var msg = 'I am learning lexical scope and closure.';
//   function sayMsg() {
//     console.log(msg);
//   }
//   sayMsg();
// }

function test() {
  var msg = 'I am learning lexical scope and closure.';
  return function () {
    console.log(msg);
  };
}
const sayMsg = test();
// console.log(sayMsg());

// function kitchen() {
//   let roast = 0;
//   return function () {
//     roast++;
//     return roast;
//   };
// }

// const firstServer = kitchen();

// console.log(firstServer());
// console.log(firstServer());

// var b = 10;
// function a() {
//   var x = 5;
//   return function () {
//     console.log(x);
//   };
// }
// var abc = a();
// console.log(abc);

function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());
