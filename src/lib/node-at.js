import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

import { $HEAD } from '../properties/head.js';
import { $LENGTH } from '../properties/length.js';
import { $TAIL } from '../properties/tail.js';

/**
 * Internal method, make sure to check index is an integer
 * before passing index into nodeAt.
 *
 * @param {DoublyLinkedList<T>} list
 * @param {number} index
 * @returns {undefined | DoublyLinkedNode<T>}
 * @template T
 */
export var nodeAt = (list, index) => {
  var absoluteIndex = Math.abs(index);

  if (absoluteIndex > list[$LENGTH] - 1) {
    return undefined
  }

  var cursor
  var i
  if (absoluteIndex > list[$LENGTH] / 2) {
    // Traverse the list from the tail
    cursor = list[$TAIL]
    for (i = -1; i > index; i--) {
      // @ts-ignore
      // cursor should exist for the entirety of this traversal
      cursor = cursor.previous
    }
  } else {
    // Traverse the list from the head
    cursor = list[$HEAD]
    for (i = 0; i < index + 1; i++) {
      // @ts-ignore
      // cursor.next should exist for the entirety of this traversal
      cursor = cursor.next
    }
  }

  return cursor || undefined
}