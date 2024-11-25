'use strict';

const number1 = 6

let list = []

for (let i = 0; i < number1; i++) {
      const name = prompt('doge names');
      list.push(name);
    }

let list2 = document.getElementById('target');

list.sort().reverse();
for (let i = 0; i < number1; i++) {
      let li = document.createElement('li');
      li.innerHTML = list[i];
      list2.appendChild(li);
    }