/**
 * A callback function is a function passed as an argument to another function.
 * This technique allows a function to call another function.
 * A callback function can run after another function has finished.
 */
function greeting(greetingHandler, person) {
  greetingHandler(person);
}
const person1 = 'mr. lazy';
const person2 = 'mr. programmer';
function morningGreeting(person) {
  console.log('good morning', person);
}
function eveningGreeting(person) {
  console.log('good evening', person);
}
greeting(morningGreeting, person1);
greeting(morningGreeting, person2);
greeting(eveningGreeting, person1);
greeting(eveningGreeting, person2);
