import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

import { deleteNodes } from '../lib/delete-nodes.js';
import { insertNodes } from '../lib/insert-nodes.js';

import { push } from './push.js';
import { unshift } from './unshift.js';


export const $SPLICE = Symbol("splice");

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>} start
 * @param {number} deleteCount
 * @param {Array<T>} values
 * @returns {Array<T>} deletedItems
 * @template T
 */
export function splice(list, start, deleteCount = 0, values) {

  /** @type {Array<DoublyLinkedNode<T>>} */
  var deletedNodes

  /** @type {Array<T>} */
  var deletedValues = []

  /** @type {DoublyLinkedNode<T> | null} */
  var previous

  /** @type {DoublyLinkedNode<T> | null} */
  var next

  if (deleteCount > 0) {

    deletedNodes = deleteNodes(list, start, deleteCount)

    for (var deletedNode of deletedNodes) {

      // @ts-ignore
      deletedValues.push(deletedNode.value);

      deletedNode.dispose();

    }

    previous = deletedNodes[0].previous;
    next = deletedNodes[deletedNodes.length - 1].next;

  } else {

    deletedNodes = [];
    previous = start.previous;
    next = start.next;

  }

  if (next === null) {

    push(list, values)

  } else if (previous === null) {

    unshift(list, values)

  } else {

    _splice(list, previous, next, values);

  }

  return deletedValues
}

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>} start
 * @param {DoublyLinkedNode<T>} end
 * @param {Array<T>} values
 * @template T
 */
var _splice = (list, start, end, values) => {
  var cursor = insertNodes(list, start, values)
  cursor.next = end
  end.previous = cursor
};
