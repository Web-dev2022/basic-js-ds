const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data; 
  }
}

class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data, nodeLeft, nodeRight) {
    let search = true;
    let currentNode = this.#root;

    while (search) {
      if (this.#root === null) {
        this.#root = new Node(data);
        search = false;
      } else {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = new Node(data);
            search = false;
            if (nodeLeft) {
              currentNode.left.left = nodeLeft;
            }
            if (nodeRight) {
              currentNode.left.right = nodeRight;
            }
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = new Node(data);
            search = false;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  has(data) {
    let result = false;
    let search = true;
    let currentNode = this.#root;

    while (search && currentNode !== null) {
      if (data === currentNode.data) {
        result = true;
        search = false;
      } else if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          search = false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          search = false;
        }
      }
    }

    return result;
  }

  find(data) {
    let result = null;
    let search = true;
    let currentNode = this.#root;

    while (search && currentNode !== null) {
      if (data === currentNode.data) {
        result = currentNode;
        search = false;
      } else if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          search = false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          search = false;
        }
      }
    }

    return result;
  }

  remove(data) {
    let currentNode = this.#root;
    let result = false;
    let search = true;
    let prevNode;
    let prevNodeDirection;
  
    while (search) {
      if (data === currentNode.data) {
        if (!currentNode.left && !currentNode.right) {
          if (data === this.#root.data) {
            this.#root = null;
          } else {
            delete prevNode[prevNodeDirection];
          }
          search = false;
        } else if (!currentNode.left && currentNode.right) {
          if (data === this.#root.data) {
            this.#root = currentNode.right;
          } else {
            currentNode = currentNode.right;
            prevNode[prevNodeDirection] = currentNode;
          }
          search = false;
        } else if (currentNode.left && !currentNode.right) {
          if (data === this.#root.data) {
            this.#root = currentNode.left;
          } else {
            currentNode = currentNode.left;
            prevNode[prevNodeDirection] = currentNode;
          }
          search = false;
        } else {
          const deleteNode = currentNode;
          const realRoot = (data === this.#root.data) ? currentNode.right : this.#root;

          currentNode = currentNode.right;
          this.#root = currentNode;
          this.add(deleteNode.left.data, deleteNode.left.left, deleteNode.left.right);
          if (prevNode) {
            prevNode[prevNodeDirection] = currentNode;
          }
          this.#root = realRoot;
        }
      } else if (data < currentNode.data) {
        if (currentNode.left) {
          prevNode = currentNode;
          prevNodeDirection = 'left';
          currentNode = currentNode.left;
        } else {
          search = false;
        }
      } else {
        if (currentNode.right) {
          prevNode = currentNode;
          prevNodeDirection= 'right';
          currentNode = currentNode.right;
        } else {
          search = false;
        }
      }
    }
  
    return result;
  }

  min() {
    let search = true;
    let currentNode = this.#root;

    while (search) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        search = false;
      }
    }

    return currentNode.data;
  }

  max() {
    let search = true;
    let currentNode = this.#root;

    while (search) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        search = false;
      }
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};