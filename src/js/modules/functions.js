document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact__form');
    const emailInput = document.querySelector('.contact__input');
    const errorText = document.querySelector('.contact__error-message');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            errorText.textContent = ""; // Clear any previous error message
            form.submit(); // Submit the form since the email is valid
        } else {
            errorText.textContent = "Error, please check your email";
        }
    });

    emailInput.addEventListener("input", function() {
        errorText.textContent = ""; // Clear the error message when user starts typing
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});