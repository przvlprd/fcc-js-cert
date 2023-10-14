function palindrome(str) {
    let arr = str.split('')
    let helper = ''
  
    for (let letter in arr) {
      if (/[a-zA-Z0-9]/.test(arr[letter])) {
        helper += arr[letter].toLowerCase()
      }
    }
  
    let tester = helper.split('')
    for (let chars = 0; chars < Math.floor(tester.length / 2); chars++) {
      if (!(tester[chars] == tester[tester.length - chars - 1])) {
        return false;
      }
    }
    return true;
  }
  
  // palindrome("eye");
  console.log(palindrome("2_A3*3#A2"))

  // run in terminal with 'node palindrome.js'
  