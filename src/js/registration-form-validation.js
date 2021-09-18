/* ========= LOGIN / REGISTRATION FORM CLIENT SIDE VALIDATION ========= */
// !select elements
const form = document.getElementById("input-form");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");
const agreeTAC = document.getElementById("agree-tac");
const submit = document.getElementById("submit");

// !add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check input & observed validation
  checkInput();
});

function checkInput() {
  // get all value in required field
  // use trim() function for remove whitespace
  const fullNameValue = fullName.value.trim();
  const usernameValue = userName.value.trim().toLowerCase();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const checkPasswordValue = checkPassword.value.trim();

  /* // !print value in console
  console.log(fullNameValue);
  console.log(usernameValue);
  console.log(emailValue);
  console.log(phoneNumberValue);
  console.log(passwordValue);
  console.log(checkPasswordValue); */

  // !full name validation check
  if (fullNameValue === "") {
    // show error message
    // add error class
    setErrorMessage(fullName, "Full Name field can't be blank. Required this field.");

    // focus element
    fullName.focus();
  } else if (fullNameValue.length < 5 || fullNameValue.length > 50) {
    setErrorMessage(fullName, "This field minimum character is 5 and maximum character is 50. Please input at this range.");

    // focus element
    fullName.focus();
  } else {
    // add success class
    setSuccessMessage(fullName);
  }

  // !username validation check
  if (usernameValue === "") {
    // show error message
    // add error class
    setErrorMessage(userName, "Username field can't be blank. Required this field.");

    // focus element
    userName.focus();
  } else if (usernameValue.length < 5 || usernameValue.length > 30) {
    setErrorMessage(userName, "This field minimum character is 5 and maximum character is 30. Please input at this range.");

    // focus element
    userName.focus();
  } else if (!isUserNameValid(usernameValue)) {
    setErrorMessage(userName, "Sorry! Your define username is not valid.");

    // focus element
    userName.focus();
  } else {
    // add success class
    setSuccessMessage(userName);
  }

  // !email validation check
  if (emailValue === "") {
    // show error message
    // add error class
    setErrorMessage(email, "Email field can't be blank. Required this field.");

    // focus element
    email.focus();
  } else if (!isValidateEmail(emailValue)) {
    setErrorMessage(email, "Sorry! Your define email is not valid.");

    // focus element
    email.focus();
  } else {
    // add success class
    setSuccessMessage(email);
  }

  // !phone validation check
  if (phoneNumberValue === "") {
    // show error message
    // add error class
    setErrorMessage(phoneNumber, "Phone Number field can't be blank. Required this field.");

    // focus element
    phoneNumber.focus();
  } else if (phoneNumberValue.length > 11) {
    setErrorMessage(phoneNumber, "This field minimum maximum character is 11. Please input at this range.");

    // focus element
    phoneNumber.focus();
  } else {
    // add success class
    setSuccessMessage(phoneNumber);
  }

  // !password validation check
  if (passwordValue === "") {
    // show error message
    // add error class
    setErrorMessage(password, "Password field can't be blank. Required this field.");

    // focus element
    password.focus();
  } else if (passwordValue.length < 6 || passwordValue.length > 20) {
    setErrorMessage(password, "This field minimum character is 6 and maximum character is 20. Please input at this range.");

    // focus element
    password.focus();
  } else {
    // add success class
    setSuccessMessage(password);
  }

  // !retype password validation check
  if (checkPasswordValue === "") {
    // show error message
    // add error class
    setErrorMessage(checkPassword, "Password field can't be blank. Required this field.");

    // focus element
    checkPassword.focus();
  } else if (checkPasswordValue.length < 6 || checkPasswordValue.length > 20) {
    setErrorMessage(checkPassword, "This field minimum character is 6 and maximum character is 20. Please input at this range.");

    // focus element
    checkPassword.focus();
  } else if (passwordValue !== checkPasswordValue) {
    setErrorMessage(checkPassword, "Sorry! Your define password and Retype password not match. Please input correct password.");

    // focus element
    checkPassword.focus();
  } else {
    // add success class
    setSuccessMessage(checkPassword);
  }

  // !checked TAC
  if (!agreeTAC.checked === true) {
    submit.className = "submit disabled";
    submit.innerText = "Without Agree TAC Submit Disabled";

    // disabled form submit
    $(":input[type=submit]").prop("disabled", true);
  } else {
    submit.className = "submit";
    submit.innerText = "Submit Now";
  }
}

// !input error message show function
function setErrorMessage(input, message) {
  // select input field parentELement
  const formControl = input.parentElement; // parentELement = .form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

// !input success message show function
function setSuccessMessage(input) {
  // select input field parentELement
  const formControl = input.parentElement; // parentELement = .form-control

  // add success class
  formControl.className = "form-control success";
}

// !proper username validation check
function isUserNameValid(username) {
  /* 
    Usernames can only have: 
    - Lowercase Letters (a-z) 
    - Numbers (0-9)
    - Dots (.)
    - Underscores (_)
  */
  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res;
  return valid;
}

// !proper email validation check
function isValidateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
