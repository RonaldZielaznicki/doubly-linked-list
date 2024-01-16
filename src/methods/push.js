import { $LENGTH } from '../properties/length.js'
import { $TAIL } from '../properties/tail.js'

import { insertNodes } from '../lib/insert-nodes.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';


export const $PUSH = Symbol("push");

/**
 * @param {DoublyLinkedList<T>} list
 * @param {Array<T>} values
 * @returns {number}
 * @template T
 */
export var push = (list, values) => {

  // @ts-ignore
  // push is called after initialization, guaranteeing tail is defined.
  insertNodes(list, list[$TAIL], values);

  return list[$LENGTH];

}