const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const contactNumber = document.getElementById("contact_number");
const paymentType = document.getElementById("payment_type");
const email = document.getElementById("email");
//var userType = document.getElementsByName("user_type");
//const userType = document.getElementById("user_type[]");
const address = document.getElementById("address");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const contactNumberValue = contactNumber.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();

  if (firstNameValue === "") {
    setErrorFor(first_name, "First name cannot be blank");
  } else {
    setSuccessFor(first_name);
  }
  if (lastNameValue === "") {
    setErrorFor(last_name, "Last name cannot be blank");
  } else {
    setSuccessFor(last_name);
  }
  if (contactNumberValue === "") {
    setErrorFor(contact_number, "Contact cannot be blank");
  } else {
    setSuccessFor(contact_number);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (addressValue === "") {
    setErrorFor(address, "Address cannot be blank");
  } else {
    setSuccessFor(address);
  }

  if (paymentType.value === "payment_type") {
    // alert("empty");
    setErrorFor(payment_type, "Please Select Payment Type");
  } else {
    setSuccessFor(payment_type);
  }

  if (document.getElementById("school").checked) {
    document.getElementById("radio-input").style.color = "mediumseagreen";
  } else if (document.getElementById("university").checked) {
    document.getElementById("radio-input").style.color = "mediumseagreen";
  } else if (document.getElementById("employee").checked) {
    document.getElementById("radio-input").style.color = "mediumseagreen";
  } else {
    document.getElementById("error_massage").style.visibility = "visible";
    document.getElementById("error_massage").innerHTML =
      "Please Select User Type";
  }
}

// function setRadioError(input, message){

// }

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
