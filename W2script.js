// Variable declaration
let yourName = "Himanshi";
let currentYear = 2025;
let isStudent = true;

console.log("Name:", yourName);
console.log("Student?", isStudent);
console.log("Year:", currentYear);

// Age Checker using if-else
function checkAge() {
  let age = parseInt(document.getElementById("age").value);
  let message = "";

  if (age <= 0 || isNaN(age)) {
    message = "Please enter a valid age.";
  } else if (age < 18) {
    message = "You are a Minor.";
  } else if (age < 60) {
    message = "You are an Adult.";
  } else {
    message = "You are a Senior Citizen.";
  }

  document.getElementById("ageResult").innerText = message;
}

// Grade Checker using switch
function checkGrade() {
  let grade = document.getElementById("grade").value.toUpperCase();
  let message = "";

  switch (grade) {
    case "A":
      message = "Excellent!";
      break;
    case "B":
      message = "Very Good!";
      break;
    case "C":
      message = "Good!";
      break;
    case "D":
      message = "Needs Improvement!";
      break;
    case "F":
      message = "Fail!";
      break;
    default:
      message = "Enter a valid grade (A/B/C/D/F)";
  }

  document.getElementById("gradeResult").innerText = message;
}

// Even or Odd checker using modulus operator
function checkEvenOdd() {
  let num = parseInt(document.getElementById("number").value);
  if (isNaN(num)) {
    document.getElementById("numResult").innerText = "Please enter a number.";
    return;
  }

  let result = num % 2 === 0 ? "Even Number" : "Odd Number";
  document.getElementById("numResult").innerText = result;
}


