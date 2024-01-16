import { DoublyLinkedList } from "../doubly-linked-list.js";

import { $POP } from '../methods/pop.js';
import { $PUSH } from '../methods/push.js';
import { $SHIFT } from '../methods/shift.js';
import { $SPLICE } from '../methods/splice.js';
import { $UNSHIFT } from '../methods/unshift.js';

import { initialPop } from '../methods/initial-pop.js';
import { initialPush } from '../methods/initial-push.js';
import { initialShift } from '../methods/initial-shift.js';
import { initialSplice } from '../methods/initial-splice.js';
import { initialUnshift } from '../methods/initial-unshift.js';

import { $HEAD } from '../properties/head.js';
import { $LENGTH } from '../properties/length.js';
import { $NODE_SET } from '../properties/node-set.js';
import { $TAIL } from '../properties/tail.js';

/**
 * @template T
 * @param {DoublyLinkedList<T>} list
 */
export function deinitialise(list) {
  list[$HEAD] = null
  list[$LENGTH] = 0
  list[$NODE_SET] = new WeakSet();
  list[$TAIL] = null

  list[$POP] = initialPop;
  list[$PUSH] = initialPush;
  list[$SHIFT] = initialShift;
  list[$SPLICE] = initialSplice;
  list[$UNSHIFT] = initialUnshift;
}