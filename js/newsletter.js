const form = document.querySelector("form");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (validateEmail(email.value)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}

email.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {
    event.preventDefault();
    message.innerHTML = '<div class="sucess-message">You have successfully subscribed!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}