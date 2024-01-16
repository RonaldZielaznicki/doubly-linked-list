import { DoublyLinkedList } from '../doubly-linked-list.js';

/**
 * @param {any} object
 * @returns {boolean}
 */
export function isDoublyLinkedList(object) {
  return (
    typeof object == "object"
    && object instanceof DoublyLinkedList
  );
}