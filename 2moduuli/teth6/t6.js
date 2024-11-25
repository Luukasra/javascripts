'use strict'


function noppa () {
  let noppa = Math.floor(Math.random() * 6) + 1;
  return noppa
}

let noppalista = []

let luku = 0
while (true) {
  luku = noppa()
  if (luku !== 6){
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