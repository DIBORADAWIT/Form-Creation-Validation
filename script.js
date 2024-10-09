let url = window.document.url;
const form = document.getElementById(registration - form);
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented.");
});

const username = doctment.getElementById(username);
const email = doctment.getElementById(email);
const password = doctment.getElementById(password);

console.log("username:", username);
console.log("email:", email);
console.log("password:", password);

let isValid = true;
let messages = [];



if (username.length < 3) {
  isValid = false;
  messages.push('Username must be at least 3 characters long.');
}

if (!email.includes("@") || !email.includes(".")) {
  isValid = false;
  messages.push('Email must contain both "@" and "." characters.');
}

if (password.length < 8) {
  isValid = false;
  messages.push("Password must be at least 8 characters long.");
}

if (!isValid) {
  console.log(messages); 
} else {
  console.log("All inputs are valid.");
}

feedbackDiv.style.display = "block";

if (!isValid) {
  feedbackDiv.textContent="Registration succerssful";
  feedbackDiv.style.color="#28a745";
  
} else {
  feedbackDiv.innerHTML=message.join("<br>");
  feedbackDiv.style.color="#dc3545";
}
