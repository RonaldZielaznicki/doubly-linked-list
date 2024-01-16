import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { $HEAD } from '../properties/head.js';
import { $LENGTH } from '../properties/length.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';


export const $UNSHIFT = Symbol("unshift");

/**
 * @param {DoublyLinkedList<T>} list
 * @param {Array<T>} values
 * @returns {number}
 * @template T
 */
export var unshift = (list, values) => {

  for (var i = values.length - 1; i > -1; i--) {

    // @ts-ignore #head is initialized at this point.
    list[$HEAD].previous = new DoublyLinkedNode(
      values[i],
      null,
      list[$HEAD]
    )

    // @ts-ignore #head is initialized at this point.
    list[$HEAD] = list[$HEAD].previous

  }

  list[$LENGTH] += values.length

  return list[$LENGTH];
}
