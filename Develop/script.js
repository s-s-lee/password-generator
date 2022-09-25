// defining all possible password characters
const characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+{}[]<>/,.:;|~`",
};

// function to generate password based on user inputs
function generatePassword() {
  var password = "";
  var passwordText = "";
    var length = parseInt(prompt("How many characters will your password have?"));
    // informing user of password minimum and maximum length
      if (length < 8 || length > 128) {
          prompt("Password must be at least 8 characters long and no more than 128 characters.");
      } 

     else {
      var lowerCase = confirm("Do you want to use lowercase letters?");
        if (lowerCase) {
          passwordText += characters.lowerCase;
        };
      var upperCase = confirm("Do you want to use uppercase letters?");
        if (upperCase) {
          passwordText += characters.upperCase;
        };
      var numbers = confirm("Do you want to use numbers?");
        if (numbers) {
          passwordText += characters.numbers;
        };
      var symbols = confirm("Do you want to use special characters?");
        if (symbols) {
          passwordText += characters.symbols;
        };
     
      for (var i = 0; i < length; i++) {
        password += passwordText[Math.floor(Math.random() * passwordText.length)];
      }
      return password;
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