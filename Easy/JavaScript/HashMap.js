const hashMap = (arr) => {
  let countMap = new Map();
  let maxCount = Math.max();
  let max = -1;

  arr.forEach((element) => {
    if (countMap.get(element) === undefined) countMap.set(element, 1);
    else countMap.set(element, countMap.get(element) + 1);
    if (maxCount < countMap.get(element)) {
      maxCount = countMap.get(element);
      max = element;
    }
  });
  if (countMap.size !== 0) {
    countMap.forEach((value, key) => {
      if (countMap.has(key)) console.log(key, " ==> ", value);
    });
  }
  return max;
};

const sortArray = require("./SortArray");

const traditionalArray = (arr) => {
  let previous = [];
  let count = 0;
  let maxCount = Math.max();
  let maxElement = -1;

  arr = sortArray(arr);
  previous.length = arr.length;
  previous[0] = arr[0];
  count++;

  let prevElement = -1;

  let k = 0;
  for (let i = 1; i < arr.length; i++) {
    if (prevElement !== arr[i]) count = 1;
    for (let j = 0; j < previous.length; j++) {
      prevElement = previous[j];
      if (arr[i] === previous[j]) count++;
      else {
        previous[++k] = arr[i];
        prevElement = arr[i];
        count++;
        break;
      }
      if (previous[j + 1] === undefined) break;
    }
    if (maxCount < count) {
      maxCount = count;
      maxElement = arr[i];
    }
  }
  return maxElement;
};
// console.log(hashMap([1, 2, 1, 1, 2, 2, 3, 3, 4]));
console.log(traditionalArray([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4,4,4,4,4,4,3,4,4]));
