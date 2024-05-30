const sortArray = require("./SortArray.js");

const missingNumber = (array) => {
  if (array.length > 0) {
    array = sortArray(array);
    let current = 1;
    for (element of array) {
      if (current <= array.length) {
        if (current != element) return current;
        current++;
      }
    }
  }
};

console.log(missingNumber([1, 2, 4, 6, 3, 7, 8]));
