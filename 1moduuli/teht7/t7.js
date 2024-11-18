'use strict'
const number = parseInt(prompt('number of dice rolls'));
let i = 0
let all = 0
while (i < number) {
            const r = Math.floor(Math.random()*6)+1;
            all = all + r;
            i++;
        }
document.querySelector('#target').innerHTML = all;