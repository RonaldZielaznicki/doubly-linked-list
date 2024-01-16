import { deleteNodes } from '../lib/delete-nodes.js';

import { $HEAD } from '../properties/head.js'

import { DoublyLinkedList } from '../doubly-linked-list.js';


export const $SHIFT = Symbol("shift");

/**
 * @param {DoublyLinkedList<T>} list
 * @returns {T | undefined}
 * @template T
 */
export var shift = (list) => {

  var deletedNode = deleteNodes(list, list[$HEAD], 1)[0];
  var value;

  if (deletedNode) {

    value = deletedNode.value || undefined;
    deletedNode.dispose();

  }

  return value;

};
