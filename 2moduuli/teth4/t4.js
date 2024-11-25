'use strict'

let list = []
let number1 = 1

while (number1 !== 0) {
   number1 = parseInt(prompt('gimme nuber'));
   if (number1 !== 0 && !isNaN(number1)) {
        list.push(number1);
    }

}

list.sort((a, b) => b - a);
console.log(list);