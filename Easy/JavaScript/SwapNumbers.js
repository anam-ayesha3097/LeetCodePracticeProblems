const SwapNumbers = (num1, num2) => {
  [num1, num2] = [num2, num1];
  return [num1, num2];
};

console.log(SwapNumbers(100, 200));
