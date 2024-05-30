const countNumberOccurences = (array, countElement) => {
  if (array.length > 0) {
    let occurence = 0;
    for (element of array) {
      if (element === countElement) ++occurence;
    }
    return occurence;
  }
};

console.log(countNumberOccurences([1, 1, 2, 2, 2, 2, 3], 3));
