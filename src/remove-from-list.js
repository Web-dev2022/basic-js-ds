const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, k) {
  let currentItem = list;
  let search = true;
  let prevItem;

  while (search) {
    if (currentItem.value === k) {
      if (prevItem) {
        prevItem.next = currentItem.next;
        if (currentItem.next !== null) {
          currentItem = currentItem.next;
          continue;
        }
      } else {
        currentItem = currentItem.next;
        list = currentItem;
      }
    }

    prevItem = currentItem;
    currentItem = currentItem.next;
    if (currentItem === null) {
      search = false;
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};