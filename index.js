function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        nameInput.classList.add('error');
    } else {
        nameError.textContent = "";
        nameInput.classList.remove('error');
    }
}
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
        emailInput.classList.add('error');
    } else {
        emailError.textContent = "";
        emailInput.classList.remove('error');
    }
}
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        passwordInput.classList.add('error');
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove('error');
    }
}
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('password').addEventListener('blur', validatePassword);

document.getElementById('form').addEventListener('submit', function(event) {
    validateName();
    validateEmail();
    validatePassword();
    
    if (document.querySelectorAll('.error').length > 0) {
        event.preventDefault();
    }
});
