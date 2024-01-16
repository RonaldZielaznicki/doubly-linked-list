import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { $LENGTH } from '../properties/length.js';
import { $NODE_SET } from '../properties/node-set.js';

import { DoublyLinkedList } from '../doubly-linked-list.js';

import { deinitialise } from './deinitialise.js';
import { setHead } from './set-head.js';
import { setTail } from './set-tail.js';

/**
 * @param {DoublyLinkedList<T>} list
 * @param {DoublyLinkedNode<T>?} start
 * @param {number} deleteCount
 * @returns {Array<DoublyLinkedNode<T>>}
 * @template T
 */
export var deleteNodes = (list, start, deleteCount) => {

  /** @type {DoublyLinkedNode<T> | null} */
  var cursor = start
  /** @type {Array<DoublyLinkedNode<T>>} */
  var deletedItems = []
  var i = 0
  var lastDeleted = start

  while (i < deleteCount && cursor) {
    deletedItems.push(cursor)
    list[$NODE_SET].delete(cursor);
    lastDeleted = cursor
    i++
    cursor = cursor.next
  }

  list[$LENGTH] -= deletedItems.length

  var firstDeletedIsHead = Boolean(start?.previous) == false
  var lastDeletedIsTail = Boolean(lastDeleted?.next) == false

  if (firstDeletedIsHead && lastDeletedIsTail) {

    deinitialise(list);

  } else if (firstDeletedIsHead) {

    // @ts-ignore 'lastDeleted' is possibly 'null'
    // The checks above prevent lastDeleted from being null.
    setHead(list, lastDeleted.next)

  } else if (lastDeletedIsTail) {

    // @ts-ignore 'start' is possibly 'null'
    // The checks above prevent start from being null.
    setTail(list, start.previous);

  } else {

    // @ts-expect-error Object is possibly 'null'
    // The checks above prevent deletedItems[0].previous from being null.
    start.previous.next = lastDeleted.next

    // @ts-expect-error Object is possibly 'null'
    // The checks above prevent lastDeleted.next from being null.
    lastDeleted.next.previous = start.previous

  }

  return deletedItems
}
