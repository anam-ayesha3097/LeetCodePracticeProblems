const reverseArray = (array) => {
  let reverse = [];
  if (array.length > 0) {
    for (element of array) reverse.unshift(element);
    return reverse;
  }
};

console.log(reverseArray([1, 2, 3, 4, 5]));
