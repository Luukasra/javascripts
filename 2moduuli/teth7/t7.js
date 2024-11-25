'use strict'


function noppa (sides) {
  let noppa = Math.floor(Math.random() * sides) + 1;
  return noppa
}

let noppalista = []

let luku = 0

const numero = parseInt(prompt("kuinka monta puolta nopassa on"))
while (true) {
  luku = noppa(numero)
  if (luku !== numero){
    noppalista.push(luku);
  }else{
    noppalista.push(luku);
    break
  }

}

  let list = document.getElementById("target");

   for (let i = 0; i < noppalista.length; ++i) {
       let li = document.createElement('li');
       li.innerText = noppalista[i];
       list.appendChild(li);
   }