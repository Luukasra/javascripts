 'use strict';
    const number1 = prompt('int1 pls');
    const number2 = prompt('int2 pls');
    const number3 = prompt('int3 pls');
    let number11 = parseInt(number1)
    let number22 = parseInt(number2)
    let number33 = parseInt(number3)
    let all = 0;
    let product = 0;
    product = number22*number33*number11;
    all = all + number11;all = all + number22;
    all = all + number33;
    let avarage = 0;
    avarage = all/3
    document.querySelector('#target').innerHTML = 'sum ' + all + '!' ;
    document.querySelector('#target1').innerHTML = 'product ' + product + '!';
    document.querySelector('#target2').innerHTML = 'avarage '+avarage + '!';