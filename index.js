const buttonLeft = document.querySelector('.btn-left');
const buttonCenter = document.querySelector('.btn-center');
const buttonRight = document.querySelector('.btn-right');
const bGround = document.querySelector('.container');
const centerImage = document.querySelector('.center-img')
const thirdImage = document.querySelector('.b-img3')
const texting = document.querySelector('.texting')

//  thirdImage.style.width = '200px'

buttonLeft.addEventListener('click', function() {
 bGround.style.backgroundColor = 'rgb(41, 41, 150)';
centerImage.src = 'Pepsi_MAX_hero.png';
})
buttonCenter.addEventListener('click', function() {
 bGround.style.backgroundColor = 'black';
  centerImage.src = 'black_pepsi-removebg-preview.png';
})
buttonRight.addEventListener('click', function() {
 bGround.style.backgroundColor = 'red';
  centerImage.src = 'blue_pepsi-removebg-preview.png';
})