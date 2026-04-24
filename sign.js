function login() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let error = document.getElementById("error");

  if (user === "" || pass === "") {
    error.innerText = "Please fill all fields!";
    return;
  }

  if (pass.length < 4) {
    error.innerText = "Password must be at least 4 characters!";
    return;
  }

  // Use 'currentUser' to match script.js requirements
  localStorage.setItem("currentUser", user);

  // Redirect back to home
  window.location.href = "index.html";
}

function goBack() {
  window.history.back();
}