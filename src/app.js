document.addEventListener("DOMContentLoaded", function() {
  // Regular Expressions
  const cardPatterns = {
    option1: /^5[1-5][0-9]{14}$/, // Mastercard starts with 5 and is 16 digits long
    option2: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa starts with 4 and can be 13 or 16 digits long
    option3: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, // Diners Club starts with 3 and is 14 digits long
    option4: /^3[47][0-9]{13}$/ // American Express starts with 34 or 37 and is 15 digits long
  };
  let isCVC = /^[0-9]{3,4}$/;
  let isAmount = /^[0-9]{1,}$/;
  let isName = /^[a-zA-Z]+$/;
  let isLastName = /^[a-zA-Z]+$/;
  let isCity = /^[a-zA-Z]+$/;
  let isZip = /^[0-9]{4,7}$/;
  let isMessage = /^[a-zA-Z0-9.,:)(?'\s]+$/;

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
      input_Accept,
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
    let acceptFeed = document.querySelector("#acceptFeed");
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
    } else if (
      !cardPatterns.option1.test(inputCard.value) &&
      !cardPatterns.option2.test(inputCard.value) &&
      !cardPatterns.option3.test(inputCard.value) &&
      !cardPatterns.option4.test(inputCard.value)
    ) {
      inputCard.classList.add("is-invalid");
      cardFeed.textContent = "Please enter a valid card";
      alerty.className = "alert alert-danger";
    } else {
      inputCard.classList.remove("is-invalid");
      cardFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // CVC FALTA LO DE LOS FIELDS ARE MISSING!!!!!
    if (inputCvc.value === "") {
      inputCvc.classList.add("is-invalid");
      cvcFeed.textContent = "cvc is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isCVC.test(inputCvc.value)) {
      inputCvc.classList.add("is-invalid");
      cvcFeed.textContent = "Please enter a valid cvc";
    } else {
      inputCvc.classList.remove("is-invalid");
      cvcFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // AMOUNT
    if (inputAmount.value === "" || inputAmount.value < 1) {
      inputAmount.classList.add("is-invalid");
      amountFeed.textContent = "amount is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isAmount.test(inputAmount.value)) {
      inputAmount.classList.add("is-invalid");
      amountFeed.textContent = "Please enter a valid amount";
    } else {
      inputAmount.classList.remove("is-invalid");
      amountFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // NAME
    if (inputName.value === "") {
      inputName.classList.add("is-invalid");
      nameFeed.textContent = "First name is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isName.test(inputName.value)) {
      inputName.classList.add("is-invalid");
      nameFeed.textContent = "Please enter a valid name";
    } else {
      inputName.classList.remove("is-invalid");
      nameFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // LAST NAME
    if (inputLastName.value === "") {
      inputLastName.classList.add("is-invalid");
      lastNameFeed.textContent = "Last name is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isLastName.test(inputLastName.value)) {
      inputLastName.classList.add("is-invalid");
      lastNameFeed.textContent = "Please enter a valid last name";
    } else {
      inputLastName.classList.remove("is-invalid");
      lastNameFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // CITY
    if (inputCity.value === "") {
      inputCity.classList.add("is-invalid");
      cityFeed.textContent = "City is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isCity.test(inputCity.value)) {
      inputCity.classList.add("is-invalid");
      cityFeed.textContent = "Please enter a valid city";
    } else {
      inputCity.classList.remove("is-invalid");
      cityFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // STATE
    if (inputState.value === "Pick a state...") {
      inputState.classList.add("is-invalid");
      stateFeed.textContent = "City is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else {
      inputState.classList.remove("is-invalid");
      stateFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // ACCEPT METHOD
    const selectedCardType = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    ).value;
    const isValidCard = inputCard.value.match(cardPatterns[selectedCardType]);
    if (!isValidCard) {
      alert("Your card number doesn't match your selected card type!");
    }
    // ZIP
    if (inputZip.value === "") {
      inputZip.classList.add("is-invalid");
      zipFeed.textContent = "Zip is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isZip.test(inputZip.value)) {
      inputZip.classList.add("is-invalid");
      zipFeed.textContent = "Please enter a valid postal code";
    } else {
      inputZip.classList.remove("is-invalid");
      zipFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
    // MESSAGE
    if (inputMessage.value === "") {
      inputMessage.classList.add("is-invalid");
      messageFeed.textContent = "Message is required!";
      alerty.className = "alert alert-danger";
      alerty.innerHTML = "Some fields are missing";
    } else if (!isMessage.test(inputMessage.value)) {
      inputMessage.classList.add("is-invalid");
      messageFeed.textContent = "Please enter a valid message";
    } else {
      inputMessage.classList.remove("is-invalid");
      messageFeed.textContent = "";
      alerty.className = alerty.className.replace("alert alert-danger", "");
      alerty.innerHTML = "";
    }
  });
});
