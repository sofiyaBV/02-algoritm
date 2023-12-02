for (let index = 0; index < 6; index++) {
  console.log(index);
}

const word = "saMSung";
let convertedWord = "";
for (let i = 0; i < word.length; i++) {
  if (word[i] === word[i].toUpperCase()) {
    convertedWord += word[i].toLowerCase();
  } else {
    convertedWord += word[i].toUpperCase();
  }
}
console.log(convertedWord);
convertedWord = "";
for (let i = 0; i < word.length; i++) {
  if (i === 0) {
    convertedWord += word[i].toUpperCase();
  } else {
    convertedWord += word[i].toLowerCase();
  }
}
console.log(convertedWord);
