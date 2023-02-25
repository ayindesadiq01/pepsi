const buttonLeft = document.querySelector('.btn-left');
const buttonCenter = document.querySelector('.btn-center');
const buttonRight = document.querySelector('.btn-right');
const bGround = document.querySelector('body');
const centerImage = document.querySelector('.center-img')
const thirdImage = document.querySelector('.b-img3')

//  thirdImage.style.width = '200px'

buttonLeft.addEventListener('click', function() {
 bGround.style.backgroundColor = 'blue';
    centerImage.src = 'Pepsi_MAX_hero.png';
})
buttonCenter.addEventListener('click', function() {
 bGround.style.backgroundColor = 'black';
   centerImage.src = 'black_pepsi-removebg-preview.png';
})
buttonRight.addEventListener('click', function() {
 bGround.style.backgroundColor = 'red';
  centerImage.src = 'sweat-removebg-preview.png';
})