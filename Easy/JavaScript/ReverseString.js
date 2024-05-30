const isPalindrome = (str, reverse) => {
  return str === reverse;
};

const reverseString = (str) => {
  if (str.length > 0) {
    // let reverse = "";
    // for (i = str.length - 1; i >= 0; i--) reverse += str[i];
    // const palindrome = isPalindrome(str, reverse);
    // return [reverse, palindrome];

    const reverse = str.split("").reverse().join("");
    return [reverse, isPalindrome(str, reverse)];
  }
};

console.log(reverseString("racecar"));
