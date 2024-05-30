const SwapNumbers = (a: number, b: number): [number, number] => {
  if (a !== undefined && b !== undefined) {
    [a, b] = [b, a];
  }
  return [a, b];
};

console.log(SwapNumbers(2, 5));
