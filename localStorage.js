const addNameBtn = document.getElementById('add-name-btn');
addNameBtn.addEventListener('click', function () {
  const nameField = document.getElementById('input-name');
  const nameValue = nameField.value;

  localStorage.setItem('userName', nameValue);
});

const addAgeBtn = document.getElementById('add-age-btn');
addAgeBtn.addEventListener('click', function () {
  const ageField = document.getElementById('input-age');
  const ageValue = ageField.value;

  localStorage.setItem('userAge', ageValue);
});

const removeNameBtn = document.getElementById('remove-name-btn');
removeNameBtn.addEventListener('click', function () {
  localStorage.removeItem('userName');
});

const removeAgeBtn = document.getElementById('remove-age-btn');
removeAgeBtn.addEventListener('click', function () {
  localStorage.removeItem('userAge');
});

const clearBtn = document.getElementById('clear-all-btn');
clearBtn.addEventListener('click', function () {
  localStorage.clear();
});
