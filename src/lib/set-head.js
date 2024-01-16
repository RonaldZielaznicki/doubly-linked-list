import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

import { $HEAD } from '../properties/head.js';

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>?} node
 * @template T
 */
export var setHead = (list, node) => {
  list[$HEAD] = node
  if (list[$HEAD]) {
    list[$HEAD].previous = null
  }
};
