const binarySearch = (arr, value) => {
  if (arr.length !== 0) {
    let low = 0;
    let high = arr.length;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === value) return true;
      if (arr[mid] > value) high = mid - 1;
      else low = mid + 1;
    }

    return false;
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8));
