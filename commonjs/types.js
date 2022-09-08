/**strongly typed language:
 * int a = 5;
 * string b = "hello world";
 * object student = {name: "john", id: 55};
 * int[] = numbers = [12, 23, 34];
 * string[] friends = ["abul", "babul"];
 */

//js is dynamic typed language:
//primitive type:
const a = 5;
const b = 'five';
const bool = true;
//non-primitive:
const nums = [2, 3, 4, 5];
const student = { id: 23, class: 7, name: 'mr. programmer' };

let x = 5;
let y = x;

console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'front end dev' };
let q = p;
q.job = 'backend dev';
console.log(p, q);
