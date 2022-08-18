const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('#firstName-error');

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastName-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const phoneNumber = document.querySelector('#phoneNumber');
const phoneNumberError = document.querySelector('#phoneNumber-error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const confirmPassword = document.querySelector('#confirmPassword');
const confirmPasswordError = document.querySelector('#confirmPassword-error');


firstName.addEventListener("input", function() {
    let result = '';

    if (firstName.value === '') {
        result += "Please enter a first name";
    }

    firstNameError.textContent = result;
})
lastName.addEventListener("input", function() {
    let result = '';

    if (lastName === '') {
        result += "Please enter a last name";
    }

    lastNameError.textContent = result;
})

email.addEventListener("input", function() {
    let result = '';

    if (email.validity.typeMismatch) {
        result += "Please enter a valid email (eg: x@example.com)";
    }

    emailError.textContent = result;
})


phoneNumber.addEventListener("input", function() {
    let result = '';

    if (phoneNumber.value.length < 10) {
        result += 'Please enter a 10 digit phone number';
    }

    phoneNumberError.textContent = result;
})

password.addEventListener("input", function() {
    let result = '';

    if (password.value.length < 8) {
        result += 'Password must be at least 8 characters';
    }

    passwordError.textContent = result;
})

confirmPassword.addEventListener("input", function() {
    let result = '';

    if (password.value !== confirmPassword.value) {
        result += "Passwords do not match";
    }

    confirmPasswordError.textContent = result;
})