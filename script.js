//global const because it can be used anywhere
const alphabets = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{~|}";
const digits = "0123456789";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add function to prompt
let generatePassword = function () {
  let passwordLength = prompt(
    "Input 8 characters and no more than 128 characters",
    "8"
  );

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Input is invalid. Start over.");
    return "";
  }

  let hasLowercase = getBooleanValue("lowercase");
  let hasUppercase = getBooleanValue("uppercase");
  let hasNumeric = getBooleanValue("numeric");
  let hasSpecialCharacters = getBooleanValue("special");

  // console.log("Lowercase is " + hasLowercase);
  // console.log("Uppercase is " + hasUppercase);
  // console.log("Numeric is " + hasNumeric);
  // console.log("Special characters is " + hasSpecialCharacters);

  // Add for loop to return password
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    if (hasLowercase) {
      password += getRandomCharacter(alphabets).toLowerCase();
    }
    if (hasUppercase) {
      password += getRandomCharacter(alphabets).toUpperCase();
    }
    if (hasNumeric) {
      password += getRandomCharacter(digits);
    }
    if (hasSpecialCharacters) {
      password += getRandomCharacter(specialCharacters);
    }
    if (password.length == passwordLength) {
      break;
    }
  }
  return password;
};

//Add function to confirm input characters
let getBooleanValue = function (input) {
  if (confirm("Do you want " + input + " characters in your passwords?")) {
    return true;
  } else {
    return false;
  }
};

//Add function to return string
let getRandomCharacter = function (input) {
  let array = input.split("");
  let index = Math.floor(Math.random() * input.length);
  return array[index];
};

// console.log(getRandomCharacter(alphabets));
// console.log(getRandomCharacter(specialCharacters));
// console.log(getRandomCharacter(digits));
