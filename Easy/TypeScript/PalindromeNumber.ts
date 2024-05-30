const isPalindromeNumber = (num: number): boolean => {
  let reverse = 0;
  let temp = num;
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (num === reverse) return true;
  return false;
};

console.log(isPalindromeNumber(1001));
