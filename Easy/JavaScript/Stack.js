// const StackInterface = {
//   push: (item) => {},
//   pop: () => dataType,
//   peek: () => dataType,
//   isEmpty: () => Boolean,
//   isFull: () => Boolean,
//   printStack: () => {},
// };

class StackClass {
  constructor(size) {
    this.size = size;
    this.data = [];
  }

  push = (item) => {
    if (this.data.length === this.size) throw Error("Stack is Full!");
    this.data.push(item);
  };

  pop = () => {
    this.isEmpty();
    return this.data.pop();
  };

  peek = () => {
    this.isEmpty();
    return this.data[this.data.length - 1];
  };

  isEmpty = () => {
    if (this.data.length === 0) return true;
    return false;
  };

  isFull = () => {
    if (this.data.length === this.size) throw Error("Stack is Full");
    return false;
  };

  printStack = () => {
    this.isEmpty();
    this.data.forEach((element) => {
      console.log(element);
    });
  };
}

const stack = new StackClass(5);
stack.push(1);
stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
let peekData = stack.peek();
console.log("Peek: ", peekData);
// // stack.isFull();
// stack.printStack();
stack.pop();
// stack.pop();
// stack.pop();
peekData = stack.peek();
console.log("Peek ", peekData);
// // stack.isEmpty();
// stack.printStack();

module.exports.StackClass = StackClass;
