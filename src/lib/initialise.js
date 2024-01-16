import { DoublyLinkedNode } from '../doubly-linked-node.js';

import { DoublyLinkedList } from "../doubly-linked-list.js";

import { $POP, pop } from '../methods/pop.js';
import { $PUSH, push } from '../methods/push.js';
import { $SHIFT, shift } from '../methods/shift.js';
import { $SPLICE, splice } from '../methods/splice.js';
import { $UNSHIFT, unshift } from '../methods/unshift.js';

import { $HEAD } from '../properties/head.js';
import { $NODE_SET } from '../properties/node-set.js';
import { $TAIL } from '../properties/tail.js';

import { insertNodes } from "./insert-nodes.js";


/**
 * @param {DoublyLinkedList<T>} list
 * @param {T[]} values
 * @returns {void}
 * @template T
 */
export var initialise = (list, values) => {
  if (values.length === 0) {
    return
  }

  list[$HEAD] = new DoublyLinkedNode(values.shift())
  list[$NODE_SET].add(list[$HEAD]);
  list[$TAIL] = insertNodes(list, list[$HEAD], values);

  list[$POP] = pop;
  list[$PUSH] = push;
  list[$SHIFT] = shift;
  list[$SPLICE] = splice;
  list[$UNSHIFT] = unshift;
}