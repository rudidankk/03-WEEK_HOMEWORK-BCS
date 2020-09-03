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

var start;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// Password variables
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Uppercase conversion
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};

// Variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password placeholder
generateBtn.addEventListener("click", function () {
  pass = generatePassword();
  document.document.querySelector("#password").placeholder = pass;
});

// Function to generate password
function generatePassword() {
  // User Input
  start = parseInt(prompt("Choose between 8 and 128 characters"));
  // First if statement for user validation 
  if (!start) {
      alert("Enter a value");
  } else if (start < 8 || start > 128) {
      // Validates user input > User input prompts
      start = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      
      confirmNumber = confirm("Do you want to include numbers?");
      confirmSymbol = confirm("Do you want to include special characters?");
      confirmUppercase = confirm("Do you want to include Uppercase letters?");
      confirmLowercase = confirm("Do you want to include Lowercase letters?");
  }