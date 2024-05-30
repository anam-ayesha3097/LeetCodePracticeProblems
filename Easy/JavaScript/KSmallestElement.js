const kSmallestElement = (array) => {
  let kSmall = Math.min();
  for (element of array) {
    if (element < kSmall) kSmall = element;
  }
  return kSmall;
};

console.log(kSmallestElement([7, 10, 4, 10, 20, 15]));
