function showEmployeeInfo() {
  document.getElementById("departementInfo").style.display = "none";
  document.getElementById("employeeInfo").style.display = "";
  document.getElementById(
    "leftRight"
  ).innerHTML = `Step 1 <br/> Employee Information`;
}
function showDepartementInfo() {
  document.getElementById("employeeInfo").style.display = "none";
  document.getElementById("departementInfo").style.display = "";
  document.getElementById("dependentInfo").style.display = "none";
  document.getElementById(
    "leftRight"
  ).innerHTML = `Step 2 <br/> Department Information`;
}
function showDependentInfo() {
  document.getElementById("departementInfo").style.display = "none";
  document.getElementById("dependentInfo").style.display = "";
  document.getElementById("emergencyContact").style.display = "none";
  document.getElementById(
    "leftRight"
  ).innerHTML = `Step 3 <br/> Dependent Information`;
}
function showEmergencyContact() {
  document.getElementById("emergencyContact").style.display = "";
  document.getElementById("dependentInfo").style.display = "none";
  document.getElementById("experience").style.display = "none";
  document.getElementById(
    "leftRight"
  ).innerHTML = `Step 4 <br/> Emergency Contact`;
}
function showExperience() {
  document.getElementById("experience").style.display = "";
  document.getElementById("emergencyContact").style.display = "none";
  document.getElementById("payStructure").style.display = "none";
  document.getElementById(
    "leftRight"
  ).innerHTML = `Step 5 <br/> Work Experience`;
}
function showPayStructure() {
  document.getElementById("payStructure").style.display = "";
  document.getElementById("experience").style.display = "none";
  document.getElementById("leftRight").innerHTML = `Step 6 <br/> Pay Structure`;
}

// JavaScript to handle button click event
$(document).ready(function () {
  $("#submitButton").click(function () {
    $("#submitButton").addClass("submitted").text("Submitted");
  });
});
// Profile Pic...
let profilePic = document.getElementById("profilePic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

//DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  currentStep = (e === "next" ? ++currentStep : --currentStep);

  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // update progress bar width based on current ste
  progressBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;

  // check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};
// employeeForm Validation...
var employeeForm = document.querySelectorAll("#employeeForm")[0]; //This should be your first form
console.log(employeeForm);
employeeForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!employeeForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    // document.getElementsByClassName("toast").style.display = "";
    employeeForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showDepartementInfo();
    updateSteps("next");
  }
});
// departementForm Validation...
var departementForm = document.querySelectorAll("#departementForm")[0];
console.log(departementForm);
departementForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!departementForm.checkValidity()) {
    console.log("Form InValidated");
    // alert("Please fill all fields");
    document.getElementsByClassName("toast").style.display = "";
    departementForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showDependentInfo();
    updateSteps("next");
  }
});
// dependentForm Validation...
var dependentForm = document.querySelectorAll("#dependentForm")[0];
console.log(dependentForm);
dependentForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!dependentForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    dependentForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showEmergencyContact();
    updateSteps("next");
  }
});
// emergencyForm Validation...
var emergencyForm = document.querySelectorAll("#emergencyForm")[0]; 
console.log(emergencyForm);
emergencyForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!emergencyForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    emergencyForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showExperience()
    updateSteps("next");
  }
});
// experienceForm Validation...
var experienceForm = document.querySelectorAll("#experienceForm")[0];
console.log(experienceForm);
experienceForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!experienceForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    experienceForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showPayStructure();
    updateSteps("next");
  }
});
// payForm Validation...
var formStep6 = document.querySelectorAll("#payForm")[0];
console.log(formStep6);
payForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  event.stopPropagation();

  if (!payForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    payForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
  }
});
