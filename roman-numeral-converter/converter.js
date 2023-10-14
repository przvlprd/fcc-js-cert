function convertToRoman(num) {
    let roman = '';
    if (num - 1000 >= 0) {
      roman += 'M' + convertToRoman(num - 1000)
    } else if (num - 900 >= 0) {
      roman += 'CM' + convertToRoman(num - 900)
    } else if (num - 500 >= 0) {
      roman += 'D' + convertToRoman(num - 500)
    } else if (num - 400 >= 0) {
      roman += 'CD' + convertToRoman(num - 400)
    } else if (num - 100 >= 0) {
      roman += 'C' + convertToRoman(num - 100)
    } else if (num - 90 >= 0) {
      roman += 'XC' + convertToRoman(num - 90)
    } else if (num - 50 >= 0) {
      roman += 'L' + convertToRoman(num - 50)
    } else if (num - 40 >= 0) {
      roman += 'XL' + convertToRoman(num - 40)
    } else if (num - 10 >= 0) {
      roman += 'X' + convertToRoman(num - 10)
    } else if (num - 9 >= 0) {
      roman += 'IX' + convertToRoman(num - 9)
    } else if (num - 5 >= 0) {
      roman += 'V' + convertToRoman(num - 5)
    } else if (num - 4 >= 0) {
      roman += 'IV' + convertToRoman(num - 4)
    } else if (num - 1 >= 0) {
      roman += 'I' + convertToRoman(num - 1)
    } 
  
    return roman;
  }
  
  convertToRoman(36);
  
  console.log(convertToRoman(36))
