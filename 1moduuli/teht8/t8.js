'use strict';

        const alku_vuosi = parseInt(prompt("start_year"));
        const loppu_vuosi = parseInt(prompt("end_year"));

        if (alku_vuosi > loppu_vuosi) {
            alert("alku vuoden pitää olla pienempi kuin loppu_vuosi");
        }

        for (let vuosi = alku_vuosi; vuosi <= loppu_vuosi; vuosi++) {
            if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
                const listItem = document.createElement("li");
                listItem.textContent = vuosi;
                leapYearsList.appendChild(listItem);
            }
        }