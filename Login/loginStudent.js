
var studentIdInput = document.getElementById("student-id");

studentIdInput.addEventListener("input", function(event) {

    var inputValue = event.target.value;

    var sanitizedValue = inputValue.replace(/\D/g, '');

    event.target.value = sanitizedValue;
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var icon = document.querySelector(".password-toggle i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
