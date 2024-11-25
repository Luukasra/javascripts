'use strict';

const number1 = parseInt(prompt('kui mont'));
let list = []

for (let i = 0; i < number1; i++) {
      const name = prompt('nimi');
      list.push(name);
    }

let list2 = document.getElementById('target');

list.sort();
for (let i = 0; i < number1; i++) {
      let li = document.createElement('li');
      li.innerHTML = list[i];
      list2.appendChild(li);
    }
