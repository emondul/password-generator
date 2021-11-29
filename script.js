// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength;
var lowerCase;
var upperCase;
var number;
var special;
var pick;

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt questions for password needs
function generatePassword() {
  passwordLength = prompt("Choose a number between 8 and 128 for number of characters in password.");
  console.log(passwordLength);
  if (passwordLength < 8) {
    prompt("The number must be between 8 and 128!!!");
  } else if (passwordLength > 128) {
    prompt("The number must be between 8 and 128!!!");
  }

  lowerCase = prompt("Do you want to use lower case characters? Y = yes N = no");
  if (lowerCase === "Y") {
    lowerCase = true;
  } else if (lowerCase === "N") {
    lowerCase = false;
  }

  upperCase = prompt("Do you want to use upper case characters? Y = yes N = no");
  if (upperCase === "Y") {
    upperCase = true;
  } else if (upperCase === "N") {
    upperCase = false;
  }

  number = prompt("Do you want to use numbers? Y = yes N = no");
  if (number === "Y") {
    number = true;
  } else if (number === "N") {
    number = false;
  }

  special = prompt("Do you want to use special characters? Y = yes N = no");
  if (special === "Y") {
    special = true;
  } else if (special === "N") {
    special = false;
  }
  // randomizing the order of the different characters for the password
  function createdPassword() {
    const character = [];
    for (let i = 1; i <= passwordLength; i++) {
      var pick = Math.round(Math.random() * 4)
      if (lowerCase && pick === 1) {
        lowerCase = Math.round(Math.random() * 26)
        character.push(lowerCaseLetters[lowerCase]);
      }
      if (upperCase && pick === 2) {
        upperCase = Math.round(Math.random() * 26)
        character.push(upperCaseLetters[upperCase]);
      }
      if (number && pick === 3) {
        number = Math.round(Math.random() * 10)
        character.push(numberCharacter[number]);
      }
      if (special && pick === 4) {
        special = Math.round(Math.random() * 20)
        character.push(specialCharacter[special]);
      }
    }
    console.log(character);
    let finalP = character.toString();
    console.log(finalP);
    let finalPassword = finalP.replace(/,/g, '')
    document.querySelector('#password').textContent = finalPassword;
  }
  createdPassword()
}


