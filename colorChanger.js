const colorText = document.querySelector('.colorText');
const clickMeButton = document.querySelector('.clickMeButton');
const containerBar = document.querySelector('.containerBar');

clickMeButton.addEventListener('click', () => {
generateRandomColor();
});

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16).toUpperCase().padStart(6, 0);
    
  colorText.textContent = '#' + randomNumber;
  document.body.style.backgroundColor = '#' + randomNumber;
  colorText.style.color = '#' + randomNumber;
}