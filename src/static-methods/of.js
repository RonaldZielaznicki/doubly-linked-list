import { DoublyLinkedList } from '../doubly-linked-list.js';

/**
 * @template T
 * @param {Array<T>} values
 * @returns {DoublyLinkedList<T>}
 */
export function of(...values) {
  var linkedList = new DoublyLinkedList();
  linkedList.push.call(linkedList, values);
  return linkedList;
}
