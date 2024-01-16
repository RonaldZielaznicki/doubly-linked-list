import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { $NODE_SET } from '../properties/node-set.js';
import { $LENGTH } from '../properties/length.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';


/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>} start
 * @param {Array<T>} values
 * @returns {DoublyLinkedNode<T>} the last node inserted
 * @template T
 */
export var insertNodes = (list, start, values) => {

  var cursor = start

  for (var i = 0; i < values.length; i++) {
    cursor.next = new DoublyLinkedNode(values[i], cursor)
    cursor = cursor.next
    list[$NODE_SET].add(cursor);
  }

  list[$LENGTH] += values.length

  return cursor;

};
