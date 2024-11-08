"use strict";
console.clear();

// Variable Declar/Init

let finalPrice = "";
const priceKm = 0.21;
let ageJunior = 18;
let discountJunior = 20;
let ageSenior = 65;
let discountSenior = 40;

//get elements by initial form

const userKM = document.getElementById("userKM");
console.dir(userKM);
const userAge = document.getElementById("userAge");
console.dir(userAge);
const principalForm = document.getElementById("principalForm");
console.dir(principalForm);
// const button = document.getElementById("confirm");
// console.dir(button);

//get elements by result

const ticketResult = document.querySelector(".d-none");
console.dir(ticketResult);
const ticketPrice = document.getElementById("ticketPrice");
console.dir(ticketPrice);

// Action on submit

principalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(userKM.value);
    console.log(userAge.value);
    ticketResult.classList.remove("d-none");
})








