const loginForm = document.querySelector("#login-form");
const loginput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function subiv(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginput.value;
  localStorage.setItem("username", username);
  greeting.innerText = "hello " + username;
  greeting.classList.remove("hidden");
}

const saveUser = localStorage.getItem("username");
if (saveUser === null) {
  loginForm.addEventListener("submit", subiv);
  loginForm.classList.remove("hidden");
} else {
  greeting.innerText = "hello " + saveUser;
  greeting.classList.remove("hidden");
}
