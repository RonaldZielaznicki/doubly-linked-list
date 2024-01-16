import { IteratorExpectedTypeError } from '../type-errors/iterator_expected_type_error.js';
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
 * @param {Iterable<T>} iterable
 * @param {mapFn?} mapFn
 * @param {Object?} thisArg
 * @returns {DoublyLinkedList<T> | IteratorExpectedTypeError}
 */
export function from(iterable, mapFn = null, thisArg = null) {
  if (Boolean(iterable[Symbol.iterator]) === false) {
    return new IteratorExpectedTypeError("expected iterable to have iterator");
  }

  /** @type {number} */
  var i;

  /** @type {DoublyLinkedList<T>}*/
  var linkedList = new DoublyLinkedList();

  /** @type {T} */
  var value;

  if (mapFn) {
    i = 0;
    for (value of iterable) {
      value = mapFn.call(thisArg, value, i);
      linkedList.push(value);
      i++;
    }
  } else {
    for (value of iterable) {
      linkedList.push(value);
    }
  }

  return linkedList;
}