const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {

    return this.rootNode
  }

  add(data) {
    let node = new Node(data)

    function addNode(tempNode, newNode) {
      let direction = newNode.data < tempNode.data ? 'left' : 'right'

      if (tempNode[direction]) {
        addNode(tempNode[direction], newNode)
      } else {
        tempNode[direction] = newNode
      }

    }
    if (this.root()) {
      addNode(this.root(), node)

    } else {
      this.rootNode = node
    }

  }

  

  has(data) {
    let parent = this.root()
    if (parent == null) return false
    let direction = data > parent.data ? 'right' : 'left'
    if (parent.data == data) return true
    while (parent[direction]) {
      parent = parent[direction]
      if (parent.data == data) return true
      direction = data > parent.data ? 'right' : 'left'
    }

    return false

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }

  find(data) {
    let node = this.root()
    if(!node) return null
    let direction = data > node.data ? 'right' : 'left'
    
    if (node.data == data) return node
    while (node[direction]) {
      node = node[direction]
      if (node.data == data) return node
      direction = data > node.data ? 'right' : 'left'
    }

    return null
  }

  remove(data) {
    
    function findMinNode(node) {
      if (node.left){
        return findMinNode(node.left);
      }
      return node; 
    }

    function removeNode(node, data) {
      if (node == null) return null
      else if(data == node.data) {
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        if (!node.left || !node.right) {
          node = node.left ? node.left : node.right
          return node;
        }

        let temp = findMinNode(node.right)
        console.log('temp ', temp)
        node.data = temp.data

        node.right = removeNode(node.right, temp.data)
        return node

      }else{  //if (data < node.data || data > node.data)
        let direction = data < node.data ? 'left' : 'right'
        node[direction] = removeNode(node[direction], data)
        return node
      }

    }

    
    this.rootNode = removeNode(this.rootNode, data)


    // remove line with error and write your code here
  }

  min() {
    let parent = this.root()
    let direction = 'left'
    while (parent[direction]) {
      parent = parent[direction]
    }
    return parent.data


    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let parent = this.root()
    // let direction = 'right'
    while (parent.right) {
      parent = parent.right
    }
    return parent.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


}

module.exports = {
  BinarySearchTree
};


const tree = new BinarySearchTree();
tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
      console.log(tree.find(33));
      console.log(tree.find(1337));
      console.log(tree.find(42));



