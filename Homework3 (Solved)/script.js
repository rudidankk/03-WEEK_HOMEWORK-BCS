// Variables for User
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
      // User input validated
      confirmNumber = confirm("Do you want to include numbers?");
      confirmSymbol = confirm("Do you want to include special characters?");
      confirmUppercase = confirm("Do you want to include Uppercase letters?");
      confirmLowercase = confirm("Do you want to include Lowercase letters?");
  };

// Else if for 4 negative options
  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose criteria");
}

// Else if for 4 positive options
else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = symbol.concat(number, alpha, alpha2);
}
// 3 positive options
else if (confirmSymbol && confirmNumber && confirmUppercase) {
    choices = symbol.concat(number, alpha2);
}
else if (confirmSymbol && confirmNumber && confirmLowercase) {
    choices = symbol.concat(number, alpha);
}
else if (confirmSymbol && confirmLowercase && confirmUppercase) {
    choices = symbol.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
}
// 2 positive options 
else if (confirmSymbol && confirmNumber) {
    choices = symbols.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = symbol.concat(alpha);

} else if (confirmSymbol && confirmUppercase) {
    choices = symbol.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}
// 1 positive option
else if (confirmSymbol) {
    choices = symbol;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};
    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Random selection for all variables
    for (var i = 0; i < start; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var pass = password.join("");
    UserInput(pass);
    return pass;
}

// This puts the password on Secure Password Box
function UserInput(pass) {
  document.getElementById("password").textContent = pass;

}