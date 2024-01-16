import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>?} node
 */
export var setTail = (list, node) => {
  list[$TAIL] = node
  if (list[$TAIL]) {
    list[$TAIL].next = null
  }
};
