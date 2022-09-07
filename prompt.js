/**
 * 3 types of pop-up box
 * All of the popups open a modal window. The user cannot interact with the rest of the components of the web page without responding to this window first.
 * alert()
 * confirm()
 * prompt()
 */
// allert example
const showAlert = () => {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num > 3 && num < 7) {
    alert(`Number generated  ${num}`);
  }
};

//confirm example:
const showConfirm = () => {
  const isConfirm = confirm('Do you want to subscribe?');
  console.log(isConfirm);
  //it returns the true and false value:
  if (isConfirm === true) {
    alert('Subsciption done!');
  } else {
    alert('You can subscribe later.');
  }
};

//prompt example
const showPrompt = () => {
  const name = prompt('Give your name');
  console.log(name);
};

/**
 * Alert Box: Alert box used to inform/alert the user and notify about an event. Contains only one button, names "OK", and and returns nothing as output. Regular syntax of it: alert("message")
 *
 * Confirmation Box:
 * Provides user with a choise and notify about an event. This type of popup box has two button, named "OK", and "Cancel", and return "true" and "false" depending on the respective button click. Regular syntax of it: confrim("message")
 *
 * Prompt Box:
 * Interaction with user is possible by asking the user to input some information. Stores the user information. It has two button: "OK", and "Cancel". If the user clicks "OK" the box return the input value. If the user clicks "Cancel" the box returns null. Regular syntax is of it: prompt("message")
 */
