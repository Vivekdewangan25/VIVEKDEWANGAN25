// Get the elements
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const resetBtn = document.getElementById('reset');
const countElement = document.getElementById('count');

let count = 0;

// Add event listeners to the buttons
subtractBtn.addEventListener('click', () => {
  count -= 1;
  countElement.textContent = count;
});

addBtn.addEventListener('click', () => {
  count += 1;
  countElement.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countElement.textContent = count;
});
