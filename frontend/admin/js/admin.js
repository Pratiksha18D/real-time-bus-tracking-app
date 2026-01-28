function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (email === "admin@gmail.com" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid login details";
    error.style.color = "red";
  }
}
