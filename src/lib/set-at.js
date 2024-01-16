import { $LENGTH } from '../properties/length.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

import { nodeAt } from './node-at.js';


/**
 * @param {DoublyLinkedList<T>} list
 * @param {number} index
 * @param {any} value
 * @template T
 */
export function setAt(list, index, value) {

  if (index > list[$LENGTH] - 1) {

    console.warn(
      `Cannot set index[${index}] of doubly linked list. Linked list has fewer nodes(${list[$LENGTH]} than provided index`
    )

    return;

  }

  // @ts-ignore
  // The check above makes sure that the node is defined
  nodeAt(list, index).value = value

}