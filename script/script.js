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
const refresh = document.getElementById("refresh");
console.dir(refresh);



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
    let userNameSurname = userNameSurnameInput.value;
    let userKM = parseInt(userKMInput.value);
    let userAge = parseInt(userAgeInput.value);
    const standardPrice = priceKm * userKM;
    nameSurnameResult.innerHTML = userNameSurname

    console.log(userKM + " KM");
    console.log(userAge + " anni");

    if (userAge < ageJunior) {
        discountJunior = standardPrice * (discountJunior / 100);
        finalPrice = standardPrice - discountJunior;
        console.log(finalPrice.toFixed(2) + "€");
        offerType.innerHTML = "<b>Tariffa Junior</b>"
        ticketPriceResult.innerHTML = "<b>" + finalPrice.toFixed(2) + "€" + "</b>";
    } else if (userAge > ageSenior) {

        discountSenior = standardPrice * (discountSenior / 100);
        finalPrice = standardPrice - discountSenior;
        console.log(finalPrice.toFixed(2) + "€");
        offerType.innerHTML = "<b>Tariffa Senior</b>";
        ticketPriceResult.innerHTML = "<b>" + finalPrice.toFixed(2) + "€" + "</b>";
    } else {
        console.log(standardPrice.toFixed(2) + "€");
        offerType.innerHTML = "Tariffa standard";
        ticketPriceResult.innerHTML = "<b>" + standardPrice + "€" + "</b>";
    }

    ticketResult.classList.remove("d-none");
    userNameSurnameInput.value = "";
    userKMInput.value = "";
    userAgeInput.value = "";
}

)

refresh.addEventListener("click", function (event) {

    ticketResult.classList.add("d-none");
    userNameSurnameInput.value = "";
    userKMInput.value = "";
    userAgeInput.value = "";
})








