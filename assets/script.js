// Assignment code here
function getPasswordLength() {
  var passwordLength = prompt("Please enter a password length between 8 and 128 characters");
  if (isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128) {
    alert("Invalid selection");
    getPasswordLength();
  } else {
    return passwordLength;
  }
}
function getUserSelection() {
  var userSelection = [];
  var s = confirm("Do you want to include lowercase letters in your password?");
  userSelection.push(s);
  var s2 = confirm("Do you want to include uppercase letters in your password?");
  userSelection.push(s2);
  var s3 = confirm("Do you want to include numbers in your password?");
  userSelection.push(s3);
  var s4 = confirm("Do you want to include special characters in your password?");
  userSelection.push(s4);
  return userSelection;
}

function generatePassword() {
var length = getPasswordLength();
var choice = getUserSelection();
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