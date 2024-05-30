const hashMap = () => {
  let arr = [1, 2, 1, 1, 2, 2, 3, 3, 4];
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

console.log(hashMap());
