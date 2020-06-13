// Assignment code here
// get user defined password length
function getPasswordLength() {
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters");

  // make sure input is valid, if it isn't run function again
  if (isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128) {
    alert("Invalid selection");
    getPasswordLength();
  } else {
    // send length to generate password function
    return passwordLength;
  }
}
// assign integers to user character type selections and create an array to hold user selections
function getUserSelection() {
  var userSelection = [];
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
  // make sure at least one character type is selected
  if (userSelection.length > 0) {
    return userSelection;
  } else {
    alert("You must choose at least one character type!");
    getUserSelection();
  }
}
// generate random password
function generatePassword() {
  var passwordString = "";
  var length = getPasswordLength();
  var charTypes = getUserSelection();
  // switch on the character type at the specified array location
  for (i = 0; i < length; i++) {
    var randomSelection = Math.floor(Math.random() * charTypes.length);
    var typeSelector = charTypes[randomSelection];
    switch (typeSelector) {
      case 0: // number
        passwordString += (Math.floor(Math.random() * 9)).toString();
        break;
      case 1: // small letter
        passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        break;
      case 2: // big letter
        passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        break;
      case 3: // special characters
        passwordString += String.fromCharCode(Math.floor(Math.random() * 14) + 33);
        break;
      default:
        console.log("This didn't trigger any case, please review.");
        break;
    }
  }
  console.log("password length is " + passwordString.length);
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
generateBtn.addEventListener("click", writePassword);
generatePassword();




























