// Assignment code here

// Set Global Variables
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharcters = [
  "@",
  "%",
  "+",
  "\\",
  ",",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Set Global Functions
function passwordCriteriaPrompts() {
  //variable to store the length of the password
  var length = parseInt(
    prompt("How many characters do you want your password to be?")
  );
  //conditional to check of input is a number or not
  if (isNaN(length) === true) {
    alert("Please write in a number.");
    return passwordCriteriaPrompts();
  }
  //conditional to check if password is a minimum of 8 characters long
  if (length < 8) {
    alert("Your password must be at least 8 characters in length.");
    return passwordCriteriaPrompts();
  }

  //conditional to check if password is a maximum of 128 characters long
  if (length > 128) {
    alert("Your password can't be more than 128 characters in length.");
    return passwordCriteriaPrompts();
  }

  // variable to store boolean if the user wants lowercase letters or not
  var hasLowerCase = confirm(
    "click OK to use lowercase characters in your password."
  );
  // variable to store boolean if the user wants uppercase letters or not
  var hasUpperCase = confirm(
    "click OK to use uppercase characters in your password."
  );
  // variable to store boolean if the user wants special characters letters or not
  var hasSpecialCharacters = confirm(
    "click OK to use special characters in your password."
  );
  // variable to store boolean if the user wants numerics or not
  var hasNumerics = confirm(
    "click OK to use numerics in your password."
  );

  // conditional to check if user doesn't select types any of the choices
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecialCharacters === false &&
    hasNumerics === false
  ) {
    alert("You must choose at least one character type.");
    return passwordCriteriaPrompts();
  }

  //object to store user choices
  var passwordCriteria = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumerics: hasNumerics,
  };

  return passwordCriteria;
}

function generatePassword() {
  var criteria = passwordCriteriaPrompts();
  console.log(criteria);
  //variable to store password as it's being created

  var results = [];
  console.log(results);

  if (criteria.hasLowerCase) {
    for (i = 0; i < lowerCase.length; ++i) {
      results.push(lowerCase[i]);
    }
  }

  if (criteria.hasUpperCase) {
    for (i = 0; i < upperCase.length; ++i) {
      results.push(upperCase[i]);
    }
  }

  if (criteria.hasSpecialCharacters) {
    for (i = 0; i < specialCharcters.length; ++i) {
      results.push(specialCharcters[i]);
    }
  }

  if (criteria.hasNumerics) {
    for (i = 0; i < numeric.length; ++i) {
      results.push(numeric[i]);
    }
  }

  var finalPassword = [];

  for (i = 0; i < criteria.length; ++i) {
    var randomGen = Math.floor(Math.random() * Math.floor(results.length));
    finalPassword.push(results[randomGen]);
  }
  console.log(finalPassword);

  var finale = finalPassword.join("");
  console.log(finale);

  return finale;
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
