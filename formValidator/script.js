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
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function alphanumeric(input) {
  var letters = /^[0-9a-z''A-Z]+$/;
  if (input.value.match(/^[0-9a-zA-Z]+$/) || input.value.length == 0) {
    return true;
  } else {
    return false;
  }
}
function checklength(input, minLength, maxLength) {
  let inputLength = input.value.length;
  let inputName = getFieldName(input);
  if (inputLength == 0) {
    showError(input, `${inputName} is required`);
  } else if (inputLength < minLength) {
    showError(input, `${inputName} must have at least ${minLength} characters`);
  } else if (inputLength > maxLength) {
    showError(
      input,
      `${inputName} can't have more than ${maxLength} characters`
    );
  } else {
    showSuccess(input);
  }
}
function checkUsername(input) {
  if (alphanumeric(input)) {
    checklength(input, 3, 15);
  } else {
    showError(input, `Only alphanumeric values are allowed`);
  }
}
function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.length == 0) {
    showError(input, "Email is required");
  } else if (re.test(input.value.toLowerCase()) == true) {
    showSuccess(input);
  } else {
    showError(input, "Please enter a valid email");
  }
}
function checkPassword(input) {
  checklength(input, 5, 20);
}
function checkPassword2(input1, input2) {
  if (input2.value.length != 0) {
    if (input1.value == input2.value) {
      showSuccess(input1);
    } else {
      showError(input1, "The two passwords don't match ");
    }
  } else {
    const formControl = input1.parentElement;
    formControl.className = "form-control";
  }
}

window.setInterval(function () {
  document.getElementById("dd").play();
}, 2500);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkPassword2(password2, password);
});
