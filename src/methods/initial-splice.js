import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from "../doubly-linked-list.js";

import { initialise } from "../lib/initialise.js";

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>} start
 * @param {number} deleteCount
 * @param {Array<T>} values
 * @returns {Array<T>} deletedItems
 * @template T
 */
export function initialSplice(list, start, deleteCount, values) {
  initialise(list, values)
  return []
}