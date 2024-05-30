const longestCommonPrefix = (str: string[]): string => {
  let prefix = "";
  if (str.length > 0) {
    prefix = str[0];
    for (let i = 1; i < str.length; i++) {
      let j = 0;
      while (j < prefix.length && j < str[i].length && prefix[j] === str[i][j])
        j++;
      prefix = prefix.slice(0, j);
   
      if (prefix === " ") break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
