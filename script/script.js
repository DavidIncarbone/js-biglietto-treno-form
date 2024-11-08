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
const ticketPriceResult = document.getElementById("ticketPriceResult");
console.dir(ticketPriceResult);
const offerType = document.getElementById("offer");
console.dir(offerType);
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
    const userNameSurname = userNameSurnameInput.value;
    const userKM = parseInt(userKMInput.value);
    const userAge = parseInt(userAgeInput.value);
    const standardPrice = priceKm * userKM;
    nameSurnameResult.innerHTML = userNameSurname

    console.log(userKM + " KM");
    console.log(userAge + " anni");


    if (userAge < ageJunior) {

        discountJunior = standardPrice * (discountJunior / 100);
        finalPrice = standardPrice - discountJunior;
        console.log(finalPrice.toFixed(2) + "€");
        offerType.innerHTML = "Tariffa Junior"
        ticketPriceResult.innerHTML = finalPrice.toFixed(2) + "€ ";
    } else if (userAge > ageSenior) {

        discountSenior = standardPrice * (discountSenior / 100);
        finalPrice = standardPrice - discountSenior;
        console.log(finalPrice.toFixed(2) + "€");
        offerType.innerHTML = "Tariffa Senior";
        ticketPriceResult.innerHTML = finalPrice.toFixed(2) + "€ ";
    } else {
        console.log(standardPrice.toFixed(2) + "€");
        offerType.innerHTML = "Tariffa standard";
        ticketPriceResult.innerHTML = standardPrice + "€";

    }

    ticketResult.classList.remove("d-none");

    event.stopPropagation;
}

)








