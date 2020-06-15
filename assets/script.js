// Assignment code here
// prompt user for password length
function getPasswordLength() {
  var passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"));
  // validate entry
  while (isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128) {
    alert("Invalid selection");
    passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"));
  }
  return passwordLength;
}
// get user character type selections
function getUserSelection() {
  var userSelection = [];
  // make sure user has selected at least one character type
  var firstTime = true;
  while (userSelection.length < 1) {
    if (!firstTime) alert("You must choose at least one character type!");
    firstTime = false;
    // assign integers to user character type selections and create an array to hold user selections
    var numberType = confirm(" Would you like to include numbers in your password?");
    if (numberType === true) {
      userSelection.push(0);
    }
    var lowCaseType = confirm(" Would you like to include lowercase letters in your password?");
    if (lowCaseType === true) {
      userSelection.push(1);
    }
    var upCaseType = confirm(" Would you like to include uppercase letters in your password?");
    if (upCaseType === true) {
      userSelection.push(2);
    }
    var specialType = confirm(" Would you like to include special characters in your password?");
    if (specialType === true) {
      userSelection.push(3);
    }
  }
  return userSelection;
}
// generate actual password
function generatePassword() {
  var length = getPasswordLength();
  var charTypes = getUserSelection();
  passwordString = "";
  for (i = 0; i < length; i++) {
    //generate random number based on number of character types the user has selected to index charTypes array
    var randomNumber = Math.floor(Math.random() * charTypes.length);
    var chooseType = charTypes[randomNumber];
    switch (chooseType) {
      case 0:
        passwordString += Math.floor(Math.random() * 9).toString();
        break;
      case 1:
        passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        break;
      case 2:
        passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        break;
      case 3:
        passwordString += String.fromCharCode(Math.floor(Math.random() * 14) + 33);
        break;
      default:
        console.log("No case selected. Please review!");
        break;
    }
  }
  return passwordString;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
document.addEventListener("DOMContentLoaded", function () {
  generateBtn.addEventListener("click", writePassword);
})