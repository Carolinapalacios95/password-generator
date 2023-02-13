// Defined all the options available for randomly generated password in separate arrays
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["`", "~", "!", "@", "#", "$", "%","^", "&", "*", ".", "-", ""];

var lengthInput= "";
var confirmLowCase;
var confirmUppCase;
var confirmNumbers;
var confirmSpecChar;

function generatePassword() {
// This var stores the length chosen for the password that will be generated
    var lengthInput = prompt("How many characters would you like your password to have? (Must be between 8-128)");
// If a user selects cancel then the function stops executing
    if (!lengthInput) {
      return;
  // If a user enters a number then we check to make sure it is within our set parameter
  } else if ((lengthInput < 8) || (lengthInput > 128)) {
      alert("Password must be within 8 to 128 characters, please try again.");
      generatePassword();
  } else {
      alert("The length of your password will be " + lengthInput + " characters.")
      var confirmLowCase = confirm("Would you like your password to to contain lowercase letters?");
      var confirmUppCase = confirm("Would you like your password to contain uppercase letters?");
      var confirmNumbers = confirm("Would you like your password to contain numbers?");
      var confirmSpecChar = confirm("Would you like your password to contain special characters?");
      if (confirmLowCase === false && confirmUppCase === false && confirmNumbers === false && confirmSpecChar === false) {
        alert("Please select at least one choice to continue.")
      }
    }
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

