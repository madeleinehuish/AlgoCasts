// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

//the following will return an array of all of the highest characters
//it also uses a regex to take out spaces. will include words and exclamation points.
const myString = 'Big crazy fucking worldi!!!'

let newString=myString.replace(/[^\w!]/g, '').toLowerCase()

function maxChars(stringIn) {
  let charMap = {};
  let max = 0;
  let maxChar = '';
  let maxCharArr = [];

  for (let char of stringIn) {
    charMap[char] = charMap[char]+1 || 1; //this will create the character map
  }
  console.log('charMap: ', charMap);

  for (let char in charMap) { //iterate through the character map

    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
      maxCharArr=[]; //clears the array if a character found larger than max
    }
    if(charMap[char] === max) {
      maxCharArr.push(char); //if equal to max, it will start pushing to the max array
    }
  }
  return maxCharArr;
}

let highest = maxChars(newString);

console.log('highest characters are : ', highest);
