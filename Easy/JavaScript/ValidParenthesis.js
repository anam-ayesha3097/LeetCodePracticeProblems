const isValidParenthesis = (str) => {
  if (str.length > 0) {
    let open = 0;
    let close = 0;
    return str.split("").every((value) => {
      if (value === "(") open++;
      else if (value === ")") close++;
      if (close > open || close === 0 || open === 0) return false;
      return true;
    });
  }
};

// ("(())");
// ("()()");
// ("((");
// (")(()");
// (")(");

console.log(isValidParenthesis(")("));
