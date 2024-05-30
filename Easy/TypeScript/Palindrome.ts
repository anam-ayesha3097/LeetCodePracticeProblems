const isPalindrome = (str: string): boolean => {
  //Base Case string is not empty
  if (str.length > 0) {
    return str.split("").every((value, index) => {
      return value === str[str.length - index - 1];
    });
  }
  return false;
};

console.log(isPalindrome("afifa"));
