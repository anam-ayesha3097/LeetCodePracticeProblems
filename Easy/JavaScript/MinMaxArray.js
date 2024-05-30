const minMaxArray = (arr) => {
  let min = Math.min();
  let max = Math.max();
  //   for (i = 0; i < arr.length; i++) {
  //     if (min > arr[i]) min = arr[i];
  //     if (max < arr[i]) max = arr[i];
  //   }
  //   return [min, max];

  for (let element of arr) {
    if (min > element) min = element;
    if (max < element) max = element;
  }

  return {min, max};
};

console.log(minMaxArray([5, 4, 3, 2, 1]));
