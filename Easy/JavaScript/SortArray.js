const sortArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

// console.log(sortArray([5, 3, 4, 21, 1]));

module.exports = sortArray;
