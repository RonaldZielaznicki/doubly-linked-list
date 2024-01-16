import { DoublyLinkedList } from '../doubly-linked-list.js';


/**
 * @param {DoublyLinkedList<T>} list
 * @param {Array<Iterable<T>>} iterables
 * @returns {DoublyLinkedList<T>}
 * @template T
 */
export var concat = (list, iterables) => {

  var iterable;
  var newList;
  var value;

  newList = new DoublyLinkedList();

  for (value of list) {

    newList.push(value);

  }

  for (iterable of iterables) {

    for (value of iterable) {

      newList.push(value);

    }

  }

  return newList;

}