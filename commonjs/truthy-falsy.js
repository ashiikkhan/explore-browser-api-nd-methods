/**truthy:
 * 1. true
 * 2. any number(+/-) without 0
 * 3. any string is truthy even an space in string is truthy.
 * 4. empty {}
 * 5. empty []
 *
 **falsy:
 * 1. falsy
 * 2. 0 is falsy
 * 3. empty string is falsy
 * 4. undefined is falsy value
 * 5. null is falsy value
 */

let x = ['asd'];
if (x) {
  console.log('truthy');
} else {
  console.log('falsy');
}

//option
//check falsy
const y = 0;
if (!y) {
  console.log('y is falsy');
}
//check truthy
const z = 'mr truthy';
if (!!z) {
  console.log('z is truthy. ');
}
