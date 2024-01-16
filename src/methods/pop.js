import { deleteNodes } from '../lib/delete-nodes.js';

import { $TAIL } from '../properties/tail.js'

import { DoublyLinkedList } from '../doubly-linked-list.js';


export const $POP = Symbol("pop");

/**
 * @param {DoublyLinkedList<T>} list
 * @returns {T | undefined}
 * @template T
 */
export var pop = (list) => {

  var deletedNode = deleteNodes(list, list[$TAIL], 1)[0];
  var value;

  if (deletedNode) {

    value = deletedNode.value || undefined;
    deletedNode.dispose();

  }

  return value;

};
