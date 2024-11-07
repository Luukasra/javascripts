
'use strict'
let l = prompt("gimme the year")
const vuosi = parseInt(l)
let ans

if (vuosi % 100 == 0 && vuosi % 400 != 0) {
ans = "ei ole"
} else if (vuosi % 400 == 0) {
  ans = 'on'
}else if(vuosi % 4 == 0){
  ans = 'on'
}else{
  ans = 'ei ole'
}
    document.querySelector('#target').innerHTML = ans + '!';