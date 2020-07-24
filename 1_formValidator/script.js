const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const form = document.getElementById("form");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "Valid";
}
function checkReuired(inputarr) {
  inputarr.forEach(function (input) {
    if (input.className != "form-control success") {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
    }
  });
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkReuired([username, email, password, password2]);

  if (document.getElementById("username").value.length < 5) {
    showError(username, "Please enter at least 5 characters");
  }
});
