// Gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// Adds event listener to the generate button
generateBtn.addEventListener("click", writePassword);

// Writes password to the #password input
function writePassword() {
  //sets var equal to password text in html 
  var passwordText = document.querySelector("#password");
  //creates a var expression that calls the generatePassword function
  var password = generatePassword();
  //assigns the text in the html equal to the generated password 
  passwordText.value = password;
}

// Defines all the options available for randomly generated password in separate arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["`", "~", "!", "@", "#", "$", "%","^", "&", "*", ".", "-", ""];

// Defines variables for all the user inputs and user choice confirmations
var lengthInput= "";
var confirmLowCase;
var confirmUppCase;
var confirmNumbers;
var confirmSpecChar;


// function that contains code to confirm User Inputs when called by event listener
function generatePassword() {
// This var stores the length chosen for the password that will be generated
    var lengthInput = (prompt("How many characters would you like your password to have? (Must be between 8-128)"));
// If a user doesn't input choice then the function stops executing
    if (!lengthInput) {
      return;
    }
  // If a user enters a number then we check to make sure it is within our set parameters
   if ((lengthInput <= 7) || (lengthInput >= 129)) {
      alert("Password must be within 8 to 128 characters, please try again.");
      //this will loop until the user selects a choice within parameters
      return;
   }
      //If user selects number within parameters, then function will resume as desired
      alert("The length of your password will be " + lengthInput + " characters.")

      //User input will assign values to all the named variables 
    var confirmCharacters = function () {
      confirmLowCase = confirm("Would you like your password to to contain lowercase letters?");
      confirmUppCase = confirm("Would you like your password to contain uppercase letters?");
      confirmNumbers = confirm("Would you like your password to contain numbers?");
      confirmSpecChar = confirm("Would you like your password to contain special characters?");
    }
    //calls the above function
    confirmCharacters();
      //this will check if user selected at least one type of character for password
    if (confirmCharacters === false) {
        alert("Please select at least one choice to continue.");
        return;
      } 


    //This var takes user inputs, reates array with all chosen characters, 
    // and then randomly selects characters to generate random password
    var chosenPassword = []
      if (confirmLowCase) {
        chosenPassword = chosenPassword.concat(lowCase)
      }
      if (confirmUppCase) {
        chosenPassword = chosenPassword.concat(uppCase)
      }
      if (confirmNumbers) {
        chosenPassword = chosenPassword.concat(numbers)
      }
      if (confirmSpecChar) {
        chosenPassword = chosenPassword.concat(specChar)
      }
      //The loop below will fill this empty string with random characters from the new array
      var randomPassword = ""
      
      for (var i = 0; i < lengthInput; i++) {
        randomPassword = randomPassword + chosenPassword[Math.floor(Math.random() * chosenPassword.length)];
      }
      return randomPassword;
    }