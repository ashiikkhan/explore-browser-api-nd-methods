/**@title: null&undefined
 *
 */
/**different ways to get undefined:
 * 1. variable that is not initialized will give undefined.
 * 2. function define without return.
 * 3. parameter that is not passed will be undefined.
 * 4. if return has nothing on the right side will return undefined.
 * 5. property that doesn't exists on an object will give you undefined.
 * 6. accessing array elements outside of the index range will give you undifined.
 * 7. set a value directly to undefined.
 */

let first;

function add(a, b) {
  const total = a + b;
  console.log(total, a, b);
}
console.log(add(2));

function noNeg(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNeg(2, -3));

const fifth = { id: 2, name: 'mr. hello', age: 45 };

console.log(fifth.job);
