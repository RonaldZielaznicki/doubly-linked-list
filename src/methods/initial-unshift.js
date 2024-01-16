import { DoublyLinkedList } from "../doubly-linked-list.js";

import { initialise } from "../lib/initialise.js";

import { $LENGTH } from '../properties/length.js';

/**
 * @param {DoublyLinkedList<T>} list
 * @param {Array<T>} values
 * @returns {number}
 * @template T
 */
export var initialUnshift = (list, values) => {
  initialise(list, values);

  return list[$LENGTH];
}
