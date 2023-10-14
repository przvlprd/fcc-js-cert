const alphabetToNumber = {};
for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i);
  alphabetToNumber[letter] = i + 1;
}

const numberToAlphabet = {};
for (let letter in alphabetToNumber) {
  let number = alphabetToNumber[letter];
  numberToAlphabet[number] = letter;
}

function rot13(str) {
  let result = ''
  let arr = str.split('')

  for (let letter of arr) {
    if (/[^A-Z]/.test(letter)) {
      result += letter
    } else {
      let encoded = alphabetToNumber[letter]
      //console.log(encoded)
      
      let index = parseInt(encoded) - 13
      // console.log(index)
      if (index < 1) {
        result += numberToAlphabet[index + 26]
      } else {
        result += numberToAlphabet[index]
      }
    }
  }

  console.log(result)
  return result;
}

rot13("SERR PBQR PNZC");