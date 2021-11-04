// import functions and grab DOM elements
const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');

const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');

const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');

const recentClick = document.getElementById('recent-click');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

dogImage.addEventListener('click', () => {
  dogSound.play();
  recentClick.textContent = "dog";
})
  
catImage.addEventListener('click', () => {
  catSound.play();
  recentClick.textContent = "cat";
})

horseImage.addEventListener('click', () => {
  horseSound.play();
  recentClick.textContent = "horse";
})

