'use strict'

let list = []
let number1 = 1

while (true) {
   number1 = parseInt(prompt('gimme nuber'));
   let inde = list.indexOf(number1);
   if (inde !== -1) {

        break
    }else{
     list.push(number1);
   }

}

list.sort((a, b) => a - b);
console.log(list);