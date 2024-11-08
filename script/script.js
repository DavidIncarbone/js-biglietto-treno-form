"use strict";
console.clear();



//get elements by initial form

const userKMInput = document.getElementById("userKM");
console.dir(userKMInput);
const userAgeInput = document.getElementById("userAge");
console.dir(userAgeInput);
const principalForm = document.getElementById("principalForm");
console.dir(principalForm);
const userNameSurnameInput = document.getElementById("nameSurname");
console.dir(userNameSurnameInput);



//get elements by ticket result

const ticketResult = document.querySelector(".d-none");
console.dir(ticketResult);
const ticketPrice = document.getElementById("ticketPrice");
console.dir(ticketPrice);

// Variable Declar/Init

let finalPrice = 0;
const priceKm = 0.21;
let ageJunior = 18;
let discountJunior = 20;
let ageSenior = 65;
let discountSenior = 40;



// Action on submit

principalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userNameSurname = userNameSurnameInput;
    const userKM = parseInt(userKMInput.value);
    const userAge = parseInt(userAgeInput.value);
    const standardPrice = priceKm * userKM;
    console.log(userKM + " KM");
    console.log(userAge + " anni");

    if (userAge < ageJunior) {

        discountJunior = standardPrice * (discountJunior / 100);
        finalPrice = standardPrice - discountJunior;
        console.log(finalPrice.toFixed(2) + "€");
        ticketPrice.innerHTML = finalPrice.toFixed(2) + "€ " + " invece di " + standardPrice + "€";
    } else if (userAge > ageSenior) {

        discountSenior = standardPrice * (discountSenior / 100);
        finalPrice = standardPrice - discountSenior;
        console.log("Il prezzo del biglietto è di " + finalPrice.toFixed(2) + "€")
        ticketPrice.innerHTML = finalPrice.toFixed(2) + "€ " + " invece di " + standardPrice + "€";
    } else {
        console.log(standardPrice.toFixed(2) + "€");
        ticketPrice.innerHTML = standardPrice + "€";

    }

    ticketResult.classList.remove("d-none");
}

)








