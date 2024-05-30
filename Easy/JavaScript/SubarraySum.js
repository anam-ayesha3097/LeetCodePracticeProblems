const subArraySum = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    let arraySum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      arraySum += array[j];
      if (arraySum === sum) return [i, j];
      if (arraySum > sum) break;
    }
  }
};

console.log(subArraySum([1, 4, 20, 3, 10, 5], 24));
