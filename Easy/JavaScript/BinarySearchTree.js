class Node {
  constructor(value) {
    this.element = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode = (value) => {
    let node = new Node(value);
    if (this.root === null) this.root = node;
    else {
      let temp = this.root;
      while (temp !== null) {
        if (temp.element < value && temp.right !== null) temp = temp.right;
        else if (temp.element > value && temp.left !== null) temp = temp.left;
        else break;
      }
      if (temp.element > value) temp.left = node;
      else temp.right = node;
    }
  };

  searchNode = (value) => {
    if (this.root !== null) {
      let temp = this.root;
      while (temp != null) {
        if (temp.element === value) return true;
        else if (temp.element > value) temp = temp.left;
        else temp = temp.right;
      }
    }
  };

  printTree = () => {
    if (this.root !== null) {
      console.log("Preorder Traversal");
      preOrder(this.root);
      console.log("PostOrder Traversal");
      postOrder(this.root);
      console.log("inOrder Traversal");
      inOrder(this.root);
    }
  };
}

preOrder = (rootNode) => {
  if (rootNode !== null) {
    console.log(rootNode.element);
    preOrder(rootNode.left);
    preOrder(rootNode.right);
  }
};

postOrder = (rootNode) => {
  if (rootNode !== null) {
    postOrder(rootNode.left);
    postOrder(rootNode.right);
    console.log(rootNode.element);
  }
};

inOrder = (rootNode) => {
  if (rootNode !== null) {
    inOrder(rootNode.left);
    console.log(rootNode.element);
    inOrder(rootNode.right);
  }
};

let bst = new BinarySearchTree();
bst.addNode(8);
bst.addNode(3);
bst.addNode(10);
bst.addNode(1);
bst.addNode(6);
bst.addNode(14);
bst.addNode(4);
bst.addNode(7);
bst.addNode(13);
bst.printTree();

const isPresent = bst.searchNode(15);
if (isPresent) {
  console.log("Found!");
  bst.printTree();
} else console.log("Not Found!");
