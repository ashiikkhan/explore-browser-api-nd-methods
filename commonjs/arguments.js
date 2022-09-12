function sum(a, b, c) {
  console.log(arguments); //array like object
  console.log(typeof arguments); //object
  console.log(arguments[0]); //index use kore object er porp paoa jabe
  const args = [...arguments]; //make arguments an array.
  console.log(args);
  const result = a + b + c;
  return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log(sum.length); //total params
console.log(total);

let num1 = 5;
let num2 = 7;
function multiply(a, b) {
  a = 30; //a will change
  const result = a * b;
  return result;
}
//num1 will be same
console.log('num', num1);
const output = multiply(num1, num2);
console.log(output);
console.log('num', num1);
//here number one is not changed. because it is primitve type.

let std1 = { name: 'Mr. Lazy', id: 01 };
let std2 = { name: 'Mr. Crazy', id: 02 };

function myFunc(p1, p2) {
  p1.name = 'Mr. Active';
  p2.name = 'Mr. Normal';
}
console.log(std1, std2); //{name: "Mr. Lazy"}
myFunc(std1, std2);
console.log(std1, std2); //but after function {name: "Mr. Active"}
//because it is changed through the function && because of these are non primitive data.
