document.addEventListener("DOMContentLoaded", function() {
  // Regular Expressions
  let isCard = /^[0-9]{13,16}$/;
  let isCVC = /^[0-9]{3,4}$/;
  let isAmount = /^[0-9]{1,}$/;
  let isName = /^[a-zA-Z]+$/;
  let isLastName = /^[a-zA-Z]+$/;
  let isCity = /^[a-zA-Z]+$/;
  let isZip = /^[0-9]{4,7}$/;
  let isMessage = /^[a-zA-Z.?']+$/;

  let form = document.querySelector(".payment-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    // Destructuring
    let {
      inputCard,
      inputCvc,
      inputAmount,
      inputName,
      inputLastName,
      inputCity,
      inputState,
      inputZip,
      inputMessage
    } = e.target;
    // For invalid feedback
    let cardFeed = document.querySelector("#cardFeed");
    let cvcFeed = document.querySelector("#cvcFeed");
    let amountFeed = document.querySelector("#amountFeed");
    let nameFeed = document.querySelector("#nameFeed");
    let lastNameFeed = document.querySelector("#lastNameFeed");
    let cityFeed = document.querySelector("#cityFeed");
    let stateFeed = document.querySelector("#stateFeed");
    let zipFeed = document.querySelector("#zipFeed");
    let messageFeed = document.querySelector("#messageFeed");
    // Some fields are missing alert
    let alerty = document.querySelector("#alerty");
    // Conditions for each input
    // CARD
    if (inputCard.value === "") {
      inputCard.classList.add("is-invalid");
      cardFeed.textContent = "card is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isCard.test(inputCard.value)) {
      inputCard.classList.add("is-invalid");
      cardFeed.textContent = "Please enter a valid card";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are incorrect";
    } else {
      inputCard.classList.remove("is-invalid");
      cardFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // CVC
    if (inputCvc.value === "") {
      inputCvc.classList.add("is-invalid");
      cvcFeed.textContent = "cvc is required!";
    } else if (!isCVC.test(inputCvc.value)) {
      inputCvc.classList.add("is-invalid");
      cvcFeed.textContent = "Please enter a valid cvc";
    } else {
      inputCvc.classList.remove("is-invalid");
      cvcFeed.textContent = "";
    }
    // AMOUNT
    if (inputAmount.value === "" || inputAmount.value < 1) {
      inputAmount.classList.add("is-invalid");
      amountFeed.textContent = "amount is required!";
    } else if (!isAmount.test(inputAmount.value)) {
      inputAmount.classList.add("is-invalid");
      amountFeed.textContent = "Please enter a valid amount";
    } else {
      inputAmount.classList.remove("is-invalid");
      amountFeed.textContent = "";
    }
    // NAME
    if (inputName.value === "") {
      inputName.classList.add("is-invalid");
      nameFeed.textContent = "First name is required!";
    } else if (!isName.test(inputName.value)) {
      inputName.classList.add("is-invalid");
      nameFeed.textContent = "Please enter a valid name";
    } else {
      inputName.classList.remove("is-invalid");
      nameFeed.textContent = "";
    }
    // LAST NAME
    if (inputLastName.value === "") {
      inputLastName.classList.add("is-invalid");
      lastNameFeed.textContent = "Last name is required!";
    } else if (!isLastName.test(inputLastName.value)) {
      inputLastName.classList.add("is-invalid");
      lastNameFeed.textContent = "Please enter a valid last name";
    } else {
      inputLastName.classList.remove("is-invalid");
      lastNameFeed.textContent = "";
    }
    // CITY
    if (inputCity.value === "") {
      inputCity.classList.add("is-invalid");
      cityFeed.textContent = "City is required!";
    } else if (!isCity.test(inputCity.value)) {
      inputCity.classList.add("is-invalid");
      cityFeed.textContent = "Please enter a valid city";
    } else {
      inputCity.classList.remove("is-invalid");
      cityFeed.textContent = "";
    }
    // STATE
    if (inputState.value === "Pick a state...") {
      inputState.classList.add("is-invalid");
      stateFeed.textContent = "City is required!";
    } else {
      inputState.classList.remove("is-invalid");
      stateFeed.textContent = "";
    }
    // ZIP
    if (inputZip.value === "") {
      inputZip.classList.add("is-invalid");
      zipFeed.textContent = "Zip is required!";
    } else if (!isZip.test(inputZip.value)) {
      inputZip.classList.add("is-invalid");
      zipFeed.textContent = "Please enter a valid postal code";
    } else {
      inputZip.classList.remove("is-invalid");
      zipFeed.textContent = "";
    }
    // MESSAGE
    if (inputMessage.value === "") {
      inputMessage.classList.add("is-invalid");
      messageFeed.textContent = "Message is required!";
    } else if (!isMessage.test(inputMessage.value)) {
      inputMessage.classList.add("is-invalid");
      messageFeed.textContent = "Please enter a valid message";
    } else {
      inputMessage.classList.remove("is-invalid");
      messageFeed.textContent = "";
    }
  });
});
