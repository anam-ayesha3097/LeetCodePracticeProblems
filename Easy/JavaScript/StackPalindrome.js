const { StackClass } = require("./Stack");

const checkString = "mom";
const stack = new StackClass(checkString.length);
checkString.split("").forEach((element) => {
  stack.push(element);
});

stack.printStack();

let reverse = "";
while (!stack.isEmpty()) {
  reverse += stack.pop();
}
stack.printStack();

if (reverse === checkString) console.log(checkString, "Is a Palindrome");
else console.log(checkString, "Is not a Palindrome");
