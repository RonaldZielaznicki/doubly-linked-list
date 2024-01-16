import { nodeAt } from '../lib/node-at.js';

import { DoublyLinkedList } from '../doubly-linked-list.js'


/**
 * @param {DoublyLinkedList<T>} list
 * @param {number} index
 * @returns {T | undefined}
 * @template T
 */
export var at = (list, index) => {

  return nodeAt(list, index)?.value || undefined

}