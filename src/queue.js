const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class ListNode {
  constructor(value) {
    this.value = value; 
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.storage = [];
  }

  getUnderlyingList() {
    const result = new ListNode(this.storage[0]);
    result.next = new ListNode(this.storage[1]);

    let currentNode = result.next;

    for (let i = 2; i < this.storage.length; i++ ) {
      currentNode.next = new ListNode(this.storage[i]);
      currentNode = currentNode.next;
    }

    return result;
  }

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    const result = this.storage[0];
    this.storage.shift();

    return result;
  }
}

module.exports = {
  Queue
};
