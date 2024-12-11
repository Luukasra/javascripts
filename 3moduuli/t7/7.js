'use strict';
const button = document.querySelector('#trigger');
button.addEventListener('mouseover', function (evt) {
  const target = document.getElementById('target');
  target.src = 'img/picB.jpg';
});
button.addEventListener('mouseout', function (evt) {
  const target = document.getElementById('target');
  target.src = 'img/picA.jpg';
});