const OddEven = (num: number): string => {
  if (num % 2 === 0) return "even";
  return "odd";
};

console.log(OddEven(100));
