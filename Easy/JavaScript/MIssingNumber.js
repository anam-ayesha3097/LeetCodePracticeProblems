const sortArray = require("./SortArray.js");

const missingNumber = (array) => {
  if (array.length > 0) {
    array = sortArray(array);
    let current = -1;
    for (element of array) {
      if (current == -1) current = array[0];
      if (current <= array[array.length - 1]) {
        if (current !== element) return current;
        current++;
      } else {
        current = -1;
        return current;
      }
    }
    if (current > array[array.length - 1]) current = -1;
    return current;
  }
};

console.log(missingNumber([8, 9, 6, 11, 10]));
