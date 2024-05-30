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
      let previous = temp;
      while (temp !== null) {
        previous = temp;
        if (temp.element < value) temp = temp.right;
        else temp = temp.left;
      }
      if (previous.element > value) previous.left = node;
      else previous.right = node;
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
