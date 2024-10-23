// registration.html
const backButton = document.getElementById('back-button');

function toMainPage() {
    window.location.href = "./../index.html";
    backButton.addEventListener('click', toMainPage);
}

// index.html
const registrationButton = document.getElementById('registration-singin-button');

function toRegistration() {
    window.location.href = "./../registration.html";
    registrationButton.addEventListener('click', toRegistration);
}

