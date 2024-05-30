const nonRepeatedChar = (str) => {
  if (str.length > 0) {
    let repeatedChar = str[0];
    let nonRepeatedChar = str[0];
    for (i = 1; i < str.length; i++) {
      if (
        repeatedChar !== str[i] &&
        i + 1 <= str.length &&
        str[i + 1] !== str[i]
      )
        nonRepeatedChar = str[i];
      repeatedChar = str[i];
    }
    return nonRepeatedChar;
  }
};

console.log(nonRepeatedChar(""));
