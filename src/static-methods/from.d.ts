/**
 * @callback mapFn
 * @param {any} value
 * @param {number} index
 * @returns {any}
 */
/**
 * @template T
 *
 * @param {Iterable<T>} iterable
 * @param {mapFn?} mapFn
 * @param {Object?} thisArg
 * @returns {DoublyLinkedList<T> | IteratorExpectedTypeError}
 */
export function from<T>(iterable: Iterable<T>, mapFn?: mapFn | null, thisArg?: Object | null): IteratorExpectedTypeError | DoublyLinkedList<T>;
export type mapFn = (value: any, index: number) => any;
import { DoublyLinkedList } from '../doubly-linked-list.js';
import { IteratorExpectedTypeError } from '../type-errors/iterator_expected_type_error.js';
