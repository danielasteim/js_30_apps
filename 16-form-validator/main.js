var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write fuill name';
        return false
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validateNumber() {
    var number = document.getElementById("contact-phone").value;

    if (number.length == 0) {
        phoneError.innerHTML = 'phone is required';
        return false;
    }

    if (number.length !== 10) {
        phoneError.innerHTML = 'phone no. should be 10 digits';
        return false;
    }

    if (!number.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }

    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]$/)) {
        emailError.innerHTML = 'email invalid';
        return false
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 10;
    left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characthers required';
        return false;
    }


    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() && !validateNumber() && !validateEmail() && !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "fix errors before submitting";
        setTimeout(function () { submitError.style.display = 'none'; }, 5000);
        return false
    }
}