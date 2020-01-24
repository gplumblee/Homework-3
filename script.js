/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assign array for each character type
const lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numeric = '1234567890'.split('');
const special = [" ", "!", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\""];

function generatePassword() {
  // prompt for number of characters (8-128)
  let numOfChar;
  while (isNaN(numOfChar) || numOfChar < 8 || numOfChar > 128) {
    numOfChar = prompt("Enter a number between 8 and 128");
  }
  // confirm lower case
  let useLower = null;
  let useUpper = null;
  let useNumeric = null;
  let useSpecial = null;
  while (!useLower && !useUpper && !useNumeric && !useSpecial) {
    //confirm lower case
    useLower = confirm("Do you want to include lower case letters?");
    // confrim upper case
    useUpper = confirm("Do you want to include upper case letters?");
    // confirm numbers
    useNumeric = confirm("Do you want to include numbers?");
    // confirm special characters
    useSpecial = confirm("Do you want to include special characters?");
  };
  //concatenate the character arrays the user wants to include.
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let combArr = [];

  if (useLower) {
    array1 = lower;
  }
  if (useUpper) {
    array2 = array1.concat(upper);
  } else {
    array2 = array1;
  }
  if (useNumeric) {
    array3 = array2.concat(numeric);
  } else {
    array3 = array2;
  }
  if (useSpecial) {
    combArr = array3.concat(special);
  } else {
    combArr = array3;
  }

  //Create a function to return a random element from an array of characters
  function randomElement(arr) {
    let RandChar = arr[Math.floor(Math.random() * arr.length)];
    return RandChar;
  }

  let psswrd = "";
  for (let i = 0; i < numOfChar; i++) {
    psswrd += randomElement(combArr);
  }
  return psswrd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
