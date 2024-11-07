'use strict'
const name = prompt("gimme name")
const rando = Math.floor(Math.random()*4);
let luokka
if(rando == 0){
       luokka = name+' is huffelpuff hoe!';
}
else if(rando == 1){
       luokka =name+ ' is Slyhterin hoe!';
}
else if(rando == 2){
       luokka = name+' is ravenclaw hoe!';
}
else if(rando == 3){
       luokka =name+ ' is gryffindor hoe!';
}

document.querySelector('#target').innerHTML = luokka +'!';