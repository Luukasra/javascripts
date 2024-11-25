'use strict'
const number1 = parseInt(prompt('Enter a number'));
const number2 = parseInt(prompt('Enter a number'));
const number3 = parseInt(prompt('Enter a number'));
const number4 = parseInt(prompt('Enter a number'));
const number5 = parseInt(prompt('Enter a number'));

const numbes = [];
numbes.push(number1);
numbes.push(number2);
numbes.push(number3);
numbes.push(number4);
numbes.push(number5);
for (let i = 4; i < numbes.length && i > -1; i--) {
        console.log(numbes[i]);
    }