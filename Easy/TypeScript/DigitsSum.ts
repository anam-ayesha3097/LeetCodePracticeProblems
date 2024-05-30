const DigitsSum = (num: number): number => {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(DigitsSum(5241));
