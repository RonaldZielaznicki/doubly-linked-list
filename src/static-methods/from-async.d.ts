/**
 * @callback mapFn
 * @param {any} value
 * @param {number} index
 * @returns {any}
 */
/**
 * @template T
 *
 * @param {AsyncIterable<T>} iterable
 * @param {mapFn?} mapFn
 * @param {Object?} thisArg
 * @returns {Promise<DoublyLinkedList<T>> | AsyncIteratorExpectedTypeError}
 */
export function fromAsync<T>(iterable: AsyncIterable<T>, mapFn?: mapFn | null, thisArg?: Object | null): AsyncIteratorExpectedTypeError | Promise<DoublyLinkedList<T>>;
export type mapFn = (value: any, index: number) => any;
import { DoublyLinkedList } from '../doubly-linked-list.js';
import { AsyncIteratorExpectedTypeError } from '../type-errors/async_iterator_expected_type_error.js';
