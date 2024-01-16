import { AsyncIteratorExpectedTypeError } from '../type-errors/async_iterator_expected_type_error.js';
import { DoublyLinkedList } from '../doubly-linked-list.js';

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
export function fromAsync(iterable, mapFn = null, thisArg = null) {
  if (Boolean(iterable[Symbol.asyncIterator]) == false) {
    return new AsyncIteratorExpectedTypeError("expected iterable to have async iterator");
  }

  // @ts-ignore
  // an AsyncIterable is an iterable.
  return Promise
    // @ts-ignore
    // an AsyncIterable is an iterable.
    .all(iterable)
    .then((values) => DoublyLinkedList.from(values, mapFn, thisArg));
}
