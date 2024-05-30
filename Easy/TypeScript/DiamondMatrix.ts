const DiamondMatrix = (shape: number) => {
  if (shape > 0) {
    let space = " ".repeat(shape);

    for (let i = 0; i < shape; i++) {
      let diamond = "";
      diamond += space;
      for (let j = 0; j <= i; j++) diamond += "* ";
      space = " ".repeat(shape - (i + 1));
      console.log(diamond);
    }

    space = " ".repeat(1);
    for (let i = shape; i > 0; i--) {
      let reverse = "";
      reverse += space;
      for (let j = i; j > 0; j--) reverse += "* ";
      space = " ".repeat(shape - i + 2);
      console.log(reverse);
    }
  } else console.log("Invalid Shape");
};

DiamondMatrix(-1);
