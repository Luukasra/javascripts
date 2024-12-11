'use strict';
const target = document.getElementById("target");

const eka = document.createElement("li");
eka.textContent = "First item";

const toka = document.createElement("li");
toka.textContent = "Second item";
toka.classList.add("my-item");

const kolmas = document.createElement("li");
kolmas.textContent = "Third item";
target.appendChild(eka);
target.appendChild(toka);
target.appendChild(kolmas);