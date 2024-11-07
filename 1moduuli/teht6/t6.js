'use strict';

const should = confirm('Should I calculate the square root?');
const number = parseInt(prompt('Enter a number'));
let squared
if (should && number > 0){
  squared = number * number;
}else if(number <= 0){
  squared = "The square root of a negative number is not defined";
}


document.querySelector('#target').innerHTML = squared;
