let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    password.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
});
