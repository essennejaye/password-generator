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
// create array with boolean types to hold user choices about character types
function getUserSelection() {
  var userSelection = [];
  var s = confirm("Do you want to include numbers in your password?");
  userSelection.push(s);
  var s2 = confirm("Do you want to include lowercase letters in your password?");
  userSelection.push(s2);
  var s3 = confirm("Do you want to include uppercase letters in your password?");
  userSelection.push(s3);
  var s4 = confirm("Do you want to include special characters in your password?");
  userSelection.push(s4);
  console.log(userSelection);
  return userSelection;
}
// generate password based on length and user choices about characters
function generatePassword() {
  var length = getPasswordLength();
  console.log(length);
  var choice = getUserSelection();
  // random string generator
  var i = 0;
  var passwordString = "";
  for (i = 0; i < length; i++) {
    switch (Math.floor(Math.random() * 4 + 1)) {
      case 1: // digit
        if (choice[0] === true) {
          passwordString += (Math.floor(Math.random() * 9)).toString();
          console.log(i);

          break;
        } else {
          break;
        }
      case 2: // small letter
        if (choice[1] === true) {
          passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          console.log(i);

          break;
        } else {
          break;
        }
      case 3: // big letter
        if (choice[2] === true) {
          passwordString += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          console.log(i);

          break;
        } else {
          break;
        }
      case 4: // special characters
        if (choice[3] === true) {
          passwordString += String.fromCharCode(Math.floor(Math.random() * 14) + 33);
          console.log(i);

          break;
        } 
      default:
        break;
    }
  }
  console.log(passwordString);
  console.log(passwordString.length);
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