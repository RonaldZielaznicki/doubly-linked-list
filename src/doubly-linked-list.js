/** @template T */
export class DoublyLinkedList {

  static from = from;

  static fromAsync = fromAsync;

  static isDoublyLinkedList = isDoublyLinkedList;

  static of = of;


  /** @type {DoublyLinkedNode<T>?} */
  [$HEAD] = null;

  get head() {

    return this[$HEAD];

  };


  /** @type {number} */
  [$LENGTH] = 0;

  get length() {

    return this[$LENGTH];

  };


  /** @type {WeakSet<DoublyLinkedNode<T>>} */
  [$NODE_SET] = new WeakSet();


  /** @type {DoublyLinkedNode<T>?} */
  [$TAIL] = null;

  get tail() {

    return this[$TAIL];

  };


  /** @param {...T} values */
  constructor(...values) {

    // To match Array's constructor, we accept a 'length' parameter.
    // but it's really a noop.
    if (
      values.length === 1
      && Number.isInteger(values[0])
      // @ts-ignore values[0] is a number at this point, we can compare.
      && values[0] > -1
    ) {

      return this;

    }

    initialise(this, values);

  }


  *[Symbol.iterator]() {

    var cursor = this[$HEAD];

    while (cursor) {

      yield cursor.value;
      cursor = cursor.next;

    }

  }

  /**
   * Replaced after initialisation.
   * @see {initialise}
   */
  [$POP] = initialPop;

  /**
   * Replaced after initialisation.
   * @see {initialise}
   */
  [$PUSH] = initialPush;

  /**
   * Replaced after initialisation.
   * @see {initialise}
   */
  [$SHIFT] = initialShift;

  /**
   * Replaced after initialisation.
   * @see {initialise}
   */
  [$SPLICE] = initialSplice;

  /**
   * Replaced after initialisation.
   * @see {initialise}
   */
  [$UNSHIFT] = initialUnshift;


  /**
   * @param {number} index
   * @returns {T | undefined | IntegerExpectedTypeError}
   */
  at(index) {

    if (Number.isInteger(index) === false) {

      return new IntegerExpectedTypeError('expected index to be integer');

    }

    return at(this, index);

  }

  /**
   * @param {...Iterable<T>} iterables
   * @returns {DoublyLinkedList<T> | IteratorExpectedTypeError}
   */
  concat(...iterables) {

    for (var iterable of iterables) {

      if (Boolean(iterable[Symbol.iterator]) == false) {

        return new IteratorExpectedTypeError("expected iterable to have iterator");

      }

    }

    return concat(this, iterables);

  }

  *keys() {

    var cursor = this[$HEAD];

    while (cursor) {

      yield cursor.value;
      cursor = cursor.next;

    }

  };

  /**
   * @returns {T | undefined}
   */
  pop() {

    return this[$POP](this);

  }

  /**
   * @param {...T} values
   * @returns {number}
   */
  push(...values) {

    return this[$PUSH](this, values);

  }

  /**
   * @returns {T | undefined}
   */
  shift() {

    return this[$SHIFT](this);

  }

  /**
   * @param {DoublyLinkedNode<T>?} start
   * @param {number} deleteCount
   * @param {...T} values
   * @returns {Array<T> | MemberNodeExpectedError | NodeExpectedTypeError | IntegerExpectedTypeError | PositiveIntegerExpectedTypeError} the deleted items
   */
  splice(start, deleteCount = 0, ...values) {

    if (start instanceof DoublyLinkedNode == false) {

      return new NodeExpectedTypeError("expected start to be DoublyLinkedNode");

    } else if (this[$NODE_SET].has(start) == false) {

      return new MemberNodeExpectedError("expected start to be a member of this DoublyLinkedList");

    }

    if (Number.isInteger(deleteCount)) {

      return new IntegerExpectedTypeError("expected deleteCount to be an integer");

    } else if (deleteCount < 0) {

      return new PositiveIntegerExpectedTypeError("expected deleteCount to be a positive integer");

    }

    return this[$SPLICE](this, start, deleteCount, values);

  }

  /**
   * @param {...T} values
   * @returns {number | Error}
   */
  unshift(...values) {

    return this[$UNSHIFT](this, values);

  }

  values = this[Symbol.iterator];
}


import { MemberNodeExpectedError } from './errors/member_node_expected_error.js'

import { initialise } from './lib/initialise.js';

import { at } from './methods/at.js';
import { concat } from './methods/concat.js';
import { initialPop } from './methods/initial-pop.js'
import { initialPush } from './methods/initial-push.js'
import { initialSplice } from './methods/initial-splice.js'
import { initialShift } from './methods/initial-shift.js'
import { initialUnshift } from './methods/initial-unshift.js'
import { $POP } from './methods/pop.js'
import { $PUSH } from './methods/push.js'
import { $SPLICE } from './methods/splice.js'
import { $SHIFT } from './methods/shift.js'
import { $UNSHIFT } from './methods/unshift.js';

import { $HEAD } from './properties/head.js';
import { $LENGTH } from './properties/length.js';
import { $NODE_SET } from './properties/node-set.js';
import { $TAIL } from './properties/tail.js';

import { from } from './static-methods/from.js';
import { fromAsync } from './static-methods/from-async.js';
import { isDoublyLinkedList } from './static-methods/is-doubly-linked-list.js';
import { of } from './static-methods/of.js';

import { IntegerExpectedTypeError } from './type-errors/integer_expected_type_error.js'
import { IteratorExpectedTypeError } from './type-errors/iterator_expected_type_error.js';
import { NodeExpectedTypeError } from './type-errors/node_expected_type_error.js'
import { PositiveIntegerExpectedTypeError } from "./type-errors/positive_integer_expected_type_error.js";

import { DoublyLinkedNode } from './doubly-linked-node.js';
