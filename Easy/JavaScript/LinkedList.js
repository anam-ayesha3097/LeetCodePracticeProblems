class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  addNode = (value) => {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      let temp = this.head;
      while (temp.next !== null) temp = temp.next;
      temp.next = node;
    }
  };

  removeNode = (value) => {
    if (this.head === null) console.log("LL is empty");
    else {
      if (this.head.element === value) this.head = this.head.next;
      else {
        let temp = this.head;
        let previous = undefined;
        while (temp !== null) {
          if (temp.element === value) previous.next = temp.next;
          previous = temp;
          temp = temp.next;
        }
      }
    }
  };

  reverse = () => {
    if (this.head === null) console.log("LL is empty");
    else {
      let temp = this.head;
      let previous = null;
      while (temp !== null) {
        let current = temp;
        temp = temp.next;
        current.next = previous;
        previous = current;
        this.head = current;
      }
    }
  };

  printLinkedList = () => {
    if (this.head === null) console.log("Link List is Empty");
    else {
      let temp = this.head;
      while (temp != null) {
        console.log("Element: ", temp.element);
        temp = temp.next;
      }
    }
  };
}

const linkList = new SingleLinkedList();
linkList.addNode(1);
linkList.addNode(2);
linkList.addNode(3);
// linkList.removeNode(3);
linkList.printLinkedList();
console.log("Reversed");
linkList.reverse();
linkList.printLinkedList();
