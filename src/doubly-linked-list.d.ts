/** @template T */
export class DoublyLinkedList<T> {
    static from: typeof from;
    static fromAsync: typeof fromAsync;
    static isDoublyLinkedList: typeof isDoublyLinkedList;
    static of: typeof of;
    /** @param {...T} values */
    constructor(...values: T[]);
    get head(): DoublyLinkedNode<T> | null;
    get length(): number;
    get tail(): DoublyLinkedNode<T> | null;
    /**
     * @param {number} index
     * @returns {T | undefined | IntegerExpectedTypeError}
     */
    at(index: number): T | undefined | IntegerExpectedTypeError;
    /**
     * @param {...Iterable<T>} iterables
     * @returns {DoublyLinkedList<T> | IteratorExpectedTypeError}
     */
    concat(...iterables: Iterable<T>[]): DoublyLinkedList<T> | IteratorExpectedTypeError;
    keys(): Generator<DoublyLinkedNode<T>, void, unknown>;
    /**
     * @returns {T | undefined}
     */
    pop(): T | undefined;
    /**
     * @param {...T} values
     * @returns {number}
     */
    push(...values: T[]): number;
    /**
     * @returns {T | undefined}
     */
    shift(): T | undefined;
    /**
     * @param {DoublyLinkedNode<T>?} start
     * @param {number} deleteCount
     * @param {...T} values
     * @returns {Array<T> | MemberNodeExpectedError | NodeExpectedTypeError | IntegerExpectedTypeError | PositiveIntegerExpectedTypeError} the deleted items
     */
    splice(start: DoublyLinkedNode<T> | null, deleteCount?: number, ...values: T[]): Array<T> | MemberNodeExpectedError | NodeExpectedTypeError | IntegerExpectedTypeError | PositiveIntegerExpectedTypeError;
    /**
     * @param {...T} values
     * @returns {number | Error}
     */
    unshift(...values: T[]): number | Error;
    values: () => Generator<T | null, void, unknown>;
    /** @type {DoublyLinkedNode<T>?} */
    [$HEAD]: DoublyLinkedNode<T> | null;
    /** @type {number} */
    [$LENGTH]: number;
    /** @type {WeakSet<DoublyLinkedNode<T>>} */
    [$NODE_SET]: WeakSet<DoublyLinkedNode<T>>;
    /** @type {DoublyLinkedNode<T>?} */
    [$TAIL]: DoublyLinkedNode<T> | null;
    [Symbol.iterator](): Generator<T | null, void, unknown>;
    /**
     * Replaced after initialisation.
     * @see {initialise}
     */
    [$POP]: <T_1>(list: DoublyLinkedList<T_1>) => T_1 | undefined;
    /**
     * Replaced after initialisation.
     * @see {initialise}
     */
    [$PUSH]: <T_2>(list: DoublyLinkedList<T_2>, values: T_2[]) => number;
    /**
     * Replaced after initialisation.
     * @see {initialise}
     */
    [$SHIFT]: <T_3>(list: DoublyLinkedList<T_3>) => T_3 | undefined;
    /**
     * Replaced after initialisation.
     * @see {initialise}
     */
    [$SPLICE]: typeof initialSplice;
    /**
     * Replaced after initialisation.
     * @see {initialise}
     */
    [$UNSHIFT]: <T_4>(list: DoublyLinkedList<T_4>, values: T_4[]) => number;
}
import { DoublyLinkedNode } from './doubly-linked-node.js';
import { IntegerExpectedTypeError } from './type-errors/integer_expected_type_error.js';
import { IteratorExpectedTypeError } from './type-errors/iterator_expected_type_error.js';
import { MemberNodeExpectedError } from './errors/member_node_expected_error.js';
import { NodeExpectedTypeError } from './type-errors/node_expected_type_error.js';
import { PositiveIntegerExpectedTypeError } from "./type-errors/positive_integer_expected_type_error.js";
import { $HEAD } from './properties/head.js';
import { $LENGTH } from './properties/length.js';
import { $NODE_SET } from './properties/node-set.js';
import { $TAIL } from './properties/tail.js';
import { $POP } from './methods/pop.js';
import { $PUSH } from './methods/push.js';
import { $SHIFT } from './methods/shift.js';
import { $SPLICE } from './methods/splice.js';
import { initialSplice } from './methods/initial-splice.js';
import { $UNSHIFT } from './methods/unshift.js';
import { from } from './static-methods/from.js';
import { fromAsync } from './static-methods/from-async.js';
import { isDoublyLinkedList } from './static-methods/is-doubly-linked-list.js';
import { of } from './static-methods/of.js';
