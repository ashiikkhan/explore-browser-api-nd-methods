const getInputValue = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = '';
  return inputValue;
};
const addProduct = () => {
  const product = getInputValue('product-name');
  const quantity = getInputValue('product-quantity');
  console.log(product, quantity);
  //display in UI
  displayInUI(product, quantity);
  //set in local storage
  //   localStorage.setItem(product, quantity);
  saveItemtoLS(product, quantity);
};

const getCartFromLS = () => {
  let savedCart = localStorage.getItem('cart');
  let cart = {};
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  return cart;
};

const saveItemtoLS = (product, quantity) => {
  const cart = getCartFromLS();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const displayInUI = (product, quantity) => {
  const productContainer = document.getElementById('product-list');
  const li = document.createElement('li');
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
};

const displayStoredP = () => {
  const cart = getCartFromLS();
  for (const product in cart) {
    const quantity = cart[product];
    displayInUI(product, quantity);
  }
};
displayStoredP();
